import React from 'react'
import ReactDom from 'react-dom'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ModalProps } from './types'
import { sizes } from 'assets/styles/devices'

const modalPlaceholderElement: HTMLElement | null = document.getElementById(
  'modal-chat-placeholder'
) as HTMLDivElement | null

export const Modal = ({ children }: ModalProps): JSX.Element => {
  if (modalPlaceholderElement != null) {
    return (
      <>
        {ReactDom.createPortal(
          <ModalContainer
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ from: 20, duration: 2 }}
          >
            {children}
          </ModalContainer>,
          modalPlaceholderElement
        )}
      </>
    )
  }
  return <>Error rendering modal</>
}

const ModalContainer = styled(motion.section)`
  position: fixed;
  z-index: 100;
  top: 50;
  right: 2em;
  width: 65vw;
  height: 90vh;
  background-color: white;
  border-radius: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media ${sizes.mobile}, ${sizes.extraSmallMobile} {
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%) !important;
    width: 100vw;
  }
  @media ${sizes.extraSmallMobile} {
    margin: 1em;
  }
`
