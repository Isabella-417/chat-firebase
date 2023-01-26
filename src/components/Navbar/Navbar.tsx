import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/ui/Button/'
import { sizes } from 'assets/styles/devices'

interface Props {
  title: string
  signOut: () => void
}

export const Navbar = (user: Props): JSX.Element => {
  const { title, signOut } = user
  return (
    <NavbarContainer>
      <MainContainer>
        <ProfileElement className="container">{title}</ProfileElement>
        <ProfileElement>
          <Button label='Sign Out' onClick={signOut} />
        </ProfileElement>
      </MainContainer>
    </NavbarContainer>
  )
}

export const NavbarContainer = styled.nav`
  background-color: white;
  border: 0.2em solid #e9ebee;
  border-radius: 1em 1em 0 0;
  padding: 1em 3em;
  color: white;
  font-size: 0.7em;
`
export const MainContainer = styled.ul`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  @media ${sizes.extraSmallMobile} {
    flex-direction: column;
  }
`

export const ProfileElement = styled.li`
  list-style-type: none;
  &.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 26em;
    font-size: 3em;
  }
  @media ${sizes.extraSmallMobile} {
    &.container {
      width: 100%;
      justify-content: center;
    }
  }
`

export const ProfileImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
