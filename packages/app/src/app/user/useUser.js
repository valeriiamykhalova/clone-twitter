import React from 'react'
import UserContext from './UserContext'

export default function useUser() {
  return React.useContext(UserContext)
}
