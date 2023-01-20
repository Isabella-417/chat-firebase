import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from './firebase'

export interface AuthProvider {
  signRedirect: () => Promise<never>
}

const provider = new GoogleAuthProvider()
export const AuthProviderGoogle: AuthProvider = {
  signRedirect: () => signInWithRedirect(auth, provider)
}

export interface User {
  picture: string
  name: string
  email: string
  currentMessage?: string
}
