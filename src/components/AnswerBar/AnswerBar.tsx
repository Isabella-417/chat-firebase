import React, { useState } from 'react'
import styled from 'styled-components'
import EmojiPicker from 'emoji-picker-react'

import { sendMessage } from 'lib/firebase'
import { Emoji } from 'lib/interfaces'

import SendIcon from 'assets/images/send.svg'
import EmojiImage from 'assets/images/emoji-logo.svg'

export const AnswerBar = (): JSX.Element => {
  const [message, setMessage] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)

  const sendMsj = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    await sendMessage(message)
    setMessage('')
    displayEmojiContainer()
  }

  /* eslint-disable */
  const onEmojiClick = (emojiObject: Emoji) => {
    setMessage(`${message}${emojiObject.emoji}`)
  }

  const displayEmojiContainer = () => {
    console.log('showEmojis', showEmojis)
    setShowEmojis(!showEmojis)
  }

  return (
    <AnswerBarContainer
      onSubmit={(event) => {
        void (async () => {
          await sendMsj(event)
        })()
      }}>
      {showEmojis && (
        <EmojiContainer>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </EmojiContainer>
      )}
      <EmojiIcon onClick={displayEmojiContainer} />
      <WrittingSpace
        placeholder="Type a message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}></WrittingSpace>
      <SendMessage type="submit"></SendMessage>
    </AnswerBarContainer>
  )
}

export const AnswerBarContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.6em;
  background-color: white;
  border: 0.2em solid #e9ebee;
  border-radius: 0 0 0.3em 0.3em;
`

export const EmojiContainer = styled.div`
  position: absolute;
  bottom: calc(100% + 0.5rem);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

export const EmojiIcon = styled.span`
  border: none;
  width: 3em;
  border-radius: 2em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2em;
  background-image: url(${EmojiImage});
  cursor: pointer;
`

export const WrittingSpace = styled.textarea`
  font-size: 0.7em;
  resize: none;
  height: 3em;
  border: none;
  border: 0.2em solid #e9ebee;
  background-color: #e9ecef;
  border-radius: 0.8em;
  border: none;
  width: 100%;
  margin: 0 0.5em;
  padding: 0.5em 2em;
  word-break: break-all;
  max-height: 5em;
  font-weight: bold;
  font-size: 0.8rem;
  &:focus-visible {
    outline: none;
  }
`

export const SendMessage = styled.button`
  border: none;
  width: 3em;
  border-radius: 2em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2em;
  background-image: url(${SendIcon});
  cursor: pointer;
`
