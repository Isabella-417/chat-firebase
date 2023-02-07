import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { EmojiStyle, SkinTones } from 'emoji-picker-react'
import { auth } from './firebase'

export interface AuthProvider {
  signRedirect: () => Promise<never>
}

const provider = new GoogleAuthProvider()
export const AuthProviderGoogle: AuthProvider = {
  signRedirect: async () => await signInWithRedirect(auth, provider)
}

export interface User {
  picture: string
  name: string
  currentMessage?: string
  id: string
  uid: string
}

export interface UserAuthenticated {
  uid: string
  displayName: string
  photoURL: string
}

export interface Message {
  id: string
  [key: string]: any
}

export interface Emoji {
  activeSkinTone: SkinTones
  unified: string
  unifiedWithoutSkinTone: string
  emoji: string
  names: string[]
  getImageUrl: (emojiStyle: EmojiStyle) => string
}
