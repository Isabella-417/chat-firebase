import React from 'react'
import styled from 'styled-components'
import { User } from 'lib/interfaces'
import { sizes } from 'assets/styles/devices'

interface Props {
  message: User
}

export const Message = (message: Props): JSX.Element => {
  const { picture, name, currentMessage } = message.message
  return (
    <>
      <Profile>
        <ProfileImage src={picture} alt="profile" />
        <EmailInformation>{name}</EmailInformation>
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
  background-color: #e9ecef;
  border-radius: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 0.5em;
  margin-left: 4em;
  max-width: 20em;
  word-break: break-all;
  line-height: 1.6;
  @media ${sizes.mobile}, ${sizes.extraSmallMobile} {
    margin: 2em;
  }
`

export const Profile = styled.div`
  display: flex;
  max-width: 9em;
  justify-content: space-evenly;
`

export const ProfileImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  padding: 0.2em;
`

export const EmailInformation = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #6c757d;
  font-weight: 300;
`

export const MessageInformation = styled.p`
  font-size: 1rem;
`
