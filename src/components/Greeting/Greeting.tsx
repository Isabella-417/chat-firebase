import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { GreetingProps, GreetingContainerProps } from './types';
import { waveAnimation } from '../../assets/styles/keyframes';


export const  Greeting: FunctionComponent<GreetingProps> = ({ background, emoji, message }) => {
   return(    
        <GreetingContainer background={background}>     
            <Title>{message}</Title>
            <WaveHand>{emoji}</WaveHand>
        </GreetingContainer>
    )
}

const GreetingContainer = styled.div<GreetingContainerProps>`
  display: flex;
  width: 20em;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.background};
  background-size: cover, contain;
  border-radius: 8px;
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
  display: inline-block;
  font-size: 3rem;
  width: 3rem;
  `