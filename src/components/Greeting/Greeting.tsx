import React, { FunctionComponent } from 'react'

import styled from 'styled-components'
import { GreetingProps, GreetingContainerProps } from './types'
import { sizes } from 'assets/styles/devices'
import { waveAnimation } from 'assets/styles/keyframes'

export const Greeting: FunctionComponent<GreetingProps> = ({
  background,
  emoji,
  message
}) => {
  return (
    <GreetingContainer background={background}>
      <Title>{message}</Title>
      <WaveHand>{emoji}</WaveHand>
    </GreetingContainer>
  )
}

const GreetingContainer = styled.div<GreetingContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.background};
  background-size: cover, contain;
  border-radius: 8px;
  @media ${sizes.desktop}, ${sizes.tablet} {
    width: 20em;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
`

const WaveHand = styled.span`
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  font-size: 3rem;
  width: 3rem;
`
