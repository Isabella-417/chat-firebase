import React from 'react'
import styled from 'styled-components'

export const Navbar = (): JSX.Element => {
  return (
    <NavbarContainer>
      <MainContainer>
        <ProfileElement className="container">
          <ProfileImage src="https://i.imgur.com/1Q1Z1Zy.png" alt="profile" />
          <p>Name</p>
        </ProfileElement>
        <ProfileElement>Logout</ProfileElement>
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
    width: 7em;
  }
`

export const ProfileImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
