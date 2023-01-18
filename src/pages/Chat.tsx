import styled from 'styled-components'

import { Button, Greeting } from '../components'

import Google from '../assets/images/google-logo.svg'

export const Chat = () => {
  return (
    <Background>
      <Greeting
        message={'Welcome 🌎'}
        emoji={'👋🏻'}
        background={'background3.svg'}
      />
      <Button
        icon={Google}
        text={'Sign up with google'}
        initialColor="#4285F4"
        finalColor="#fff"
        thumbnailColor={'#fff'}
      />
    </Background>
  )
}

const Background = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  margin: 1.5em;
  padding: 0.5em;
`
