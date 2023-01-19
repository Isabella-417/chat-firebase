import { keyframes } from 'styled-components'

export const waveAnimation = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

export const moveIn = keyframes`
  0% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`

export const moveOut = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
`
