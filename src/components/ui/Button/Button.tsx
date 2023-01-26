import React from 'react'
import styled from 'styled-components'

interface Props {
  label: string
  onClick: () => void
}
export const Button = (props: Props): JSX.Element => {
  const { label, onClick } = props
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  )
}

export const ButtonContainer = styled.button`
  padding: 0.6em;
  width: 7em;
  border: 0.2em solid #e9ebee;
  background-color: white;
  border-radius: 0.4em;
  font-weight: bold;
`
