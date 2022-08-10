import React from 'react'
import { Container, Greeting, Title, SubTitle } from './styles'
import auth from '@react-native-firebase/auth'
import { LogoutButton } from '@components/Controllers/LogoutButton'

export function Header() {
  function handleSignOut() {
    auth().signOut()
  }

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  )
}
