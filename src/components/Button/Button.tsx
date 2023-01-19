import React, { FunctionComponent } from 'react'

import styled from 'styled-components'

import { ButtonProps, ThumbNailProps } from './types'

export const Button: FunctionComponent<ButtonProps> = ({
  icon,
  text,
  initialColor,
  finalColor,
  thumbnailColor,
  onClick
}) => (
  <ButtonStyle
    initialColor={initialColor}
    finalColor={finalColor}
    thumbnailColor={''}
    onClick={onClick}
  >
    <ThumbNailContainer thumbnailColor={thumbnailColor}>
      <ThumbNail src={icon} alt="logo" />
    </ThumbNailContainer>
    {text}
  </ButtonStyle>
)

const ThumbNail = styled.img`
  width: 2em;
  height: 2em;
`

const ThumbNailContainer = styled.span<ThumbNailProps>`
  background-color: ${(props) => props.thumbnailColor};
  padding: 0.8em;
  margin-right: 1em;
`

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 18em;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => props.initialColor};
  border: 1px solid ${(props) => props.initialColor};
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  :hover {
    background-color: ${(props) => props.finalColor};
    color: ${(props) => props.initialColor};
    border: 1px solid ${(props) => props.finalColor};
  }
`
