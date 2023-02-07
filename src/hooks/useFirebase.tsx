import { useState, useEffect } from 'react'
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot
} from 'firebase/firestore'
import { db } from 'lib/firebase'
import { Message } from 'lib/interfaces'

export const useFirebase = (): Message[] => {
  const [messages, setMessages] = useState<Message[]>([])
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50))
    onSnapshot(q, (QuerySnapshot) => {
      const messages: Message[] = []
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
  }, [])

  return messages
}
