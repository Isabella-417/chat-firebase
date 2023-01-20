import React from 'react'
import styled from 'styled-components'

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
          <button onClick={signOut} type="button">
            Sign out
          </button>
        </ProfileElement>
      </MainContainer>
    </NavbarContainer>
  )
}

export const NavbarContainer = styled.nav`
  background-color: black;
  border-radius: 1em 1em 0 0;
  padding: 0.1em 3em;
  color: white;
  font-size: 0.7em;
`
export const MainContainer = styled.ul`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

export const ProfileElement = styled.li`
  list-style-type: none;
  &.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 26em;
  }
`

export const ProfileImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
