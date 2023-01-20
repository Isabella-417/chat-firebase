import React from 'react'
import styled from 'styled-components'
import { User } from 'lib/interfaces'

interface Props {
  message: User
}

export const Message = (message: Props): JSX.Element => {
  const { email, picture, name, currentMessage } = message.message
  return (
    <>
      <Profile>
        <ProfileImage src={picture} alt="profile" />
        <EmailInformation>
          {name} ({email})
        </EmailInformation>
      </Profile>
      <MessageContainer>
        <MessageInformation>{currentMessage}</MessageInformation>
      </MessageContainer>
    </>
  )
}

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  border: 1px solid black;
  border-radius: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 0.5em;
  margin: 0.2em;
  max-width: 20em;
  word-break: break-all;
  line-height: 1.6;
`

export const Profile = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 15em;
  justify-content: space-between;
`

export const ProfileImage = styled.img`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  padding: 0.2em;
`

export const EmailInformation = styled.p`
  font-weight: bold;
  font-size: 0.5em;
  color: #fff;
`

export const MessageInformation = styled.p`
  font-size: 0.5em;
  color: #fff;
`
