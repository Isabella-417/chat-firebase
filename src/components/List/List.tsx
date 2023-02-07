import React, { useEffect, useRef } from 'react'
import { Message } from 'components/Message'
import { User } from 'lib/interfaces'
import styled from 'styled-components'
import { sizes } from 'assets/styles/devices'
interface Props {
  elements: User[]
  user?: string
}

export const List = (data: Props): JSX.Element => {
  const { elements, user } = data
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [elements])

  return (
    <ListContainer>
      {elements.map((element) => {
        const { id, uid } = element
        const style = uid === user ? 'left' : 'right'
        return <Message key={id} message={element} main={style} />
      })}
      <div ref={messagesEndRef} />
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
