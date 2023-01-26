import React from 'react'
import styled from 'styled-components'

import SendIcon from 'assets/images/send.svg'
import Emoji from 'assets/images/emoji-logo.svg'

export const AnswerBar = (): JSX.Element => {
  return (
    <AnswerBarContainer>
      <EmojiIcon />
      <WrittingSpace placeholder='Type a message'></WrittingSpace>
      <SendMessage type="button"></SendMessage>
    </AnswerBarContainer>
  )
}

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
export const EmojiIcon = styled.span`
  border: none;
  width: 3em;
  border-radius: 2em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2em;
  background-image: url(${Emoji});
  cursor: pointer;
`

export const AnswerBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6em;
  background-color: white;
  border: 0.2em solid #e9ebee;
  border-radius: 0 0 0.3em 0.3em;
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
