import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'

import { AnswerBar, Button, Greeting, List, Modal, Navbar } from 'components'
import { AuthProviderGoogle } from 'lib/interfaces'
import { auth } from 'lib/firebase'
import { Locale } from 'lib/locale'

import Google from 'assets/images/google-logo.svg'

export const Chat = (): JSX.Element => {
  const [user] = useAuthState(auth)
  const handleSignOut = (): void => {
    auth.signOut().catch((err) => {
      console.error(err)
    })
  }

  const handleShowModal = (): void => {
    const { signRedirect } = AuthProviderGoogle
    signRedirect().catch((err) => {
      console.error(err)
    })
  }
  const { displayName, email, photoURL } = user ?? {}
  const userSignedIn = email != null && email !== ''
  return (
    <Background>
      <Greeting
        message={Locale.greeting}
        emoji={'👋🏻'}
        background={'background3.svg'}
      />
      <Button
        icon={Google}
        text={'Sign up with google'}
        initialColor="#4285F4"
        finalColor="#fff"
        thumbnailColor={'#fff'}
        onClick={handleShowModal}
      />
      {userSignedIn && (
        <Modal>
          <Navbar title="Chat" signOut={handleSignOut} />
          <List
            elements={[
              {
                picture: photoURL ?? '',
                name: displayName ?? '',
                email,
                currentMessage:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            ]}
          />
          <AnswerBar />
        </Modal>
      )}
    </Background>
  )
}

const Background = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  margin: 1.5em;
  padding: 0.1em;
`
