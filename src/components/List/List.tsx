import React from 'react'
import { Message } from 'components/Message'
import { User } from 'lib/interfaces'
import styled from 'styled-components'

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
  padding: 0.5em;
  margin: 0.5em;
  height: 80%;
`
