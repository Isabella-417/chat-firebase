import React from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { useFirebase } from 'hooks/useFirebase'

import {
  AnswerBar,
  LoginButton,
  Greeting,
  List,
  Modal,
  Navbar
} from 'components'
import { AuthProviderGoogle } from 'lib/interfaces'
import { auth } from 'lib/firebase'
import { Locale } from 'lib/locale'

import Google from 'assets/images/google-logo.svg'

export const Chat = (): JSX.Element => {
  const [user] = useAuthState(auth)
  const messages = useFirebase()

  const msjs = messages.map((message) => {
    const { avatar, text, name, id, uid } = message
    return {
      picture: avatar,
      name: name,
      currentMessage: text,
      id: id,
      uid: uid
    }
  })

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
  const { email, uid } = user ?? {}
  const userSignedIn = email != null && email !== ''
  return (
    <Background>
      {!userSignedIn && (
        <Greeting
          message={Locale.greeting}
          emoji={'👋🏻'}
          background={'background3.svg'}
        />
      )}

      {!userSignedIn && (
        <LoginButton
          icon={Google}
          text={'Sign up with google'}
          initialColor="#4285F4"
          finalColor="#fff"
          thumbnailColor={'#fff'}
          onClick={handleShowModal}
        />
      )}
      {userSignedIn && (
        <Modal>
          <Navbar title="🌎💭" signOut={handleSignOut} />
          <List elements={msjs} user={uid ?? ''}/>
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
  align-items: center;
  margin: 1.5em;
  padding: 0.1em;
`
