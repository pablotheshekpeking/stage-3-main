'use client'

import { Providers } from './provider'
import { AuthProvider } from '../AuthContext';

export default function Home() {
  return (
    <AuthProvider>
      <div>
        <Providers />
      </div>
    </AuthProvider>
  )
}
