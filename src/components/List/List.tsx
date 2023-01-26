import React from 'react'
import { Message } from 'components/Message'
import { User } from 'lib/interfaces'
import styled from 'styled-components'
import { sizes } from 'assets/styles/devices'
interface Props {
  elements: User[]
}

export const List = (data: Props): JSX.Element => {
  const { elements } = data
  return (
    <ListContainer>
      {elements.map((element) => {
        const { email } = element
        return <Message key={email} message={element} />
      })}
    </ListContainer>
  )
}

export const ListContainer = styled.main`
  height: 72vh;
  overflow-y: scroll;
  max-height: 75%;
  @media ${sizes.desktop} {
    max-height: 70vh;
  }
  @media ${sizes.tablet} {
    max-height: 80vh;
  }
`
