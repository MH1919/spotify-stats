import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  accessToken: string | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const login = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const redirectUri = import.meta.env.VITE_REDIRECT_URI
    const scope = 'user-read-private user-read-email user-top-read user-read-recently-played'
    
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`
    
    window.location.href = authUrl
  }

  const logout = () => {
    setIsAuthenticated(false)
    setAccessToken(null)
    localStorage.removeItem('spotify_access_token')
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
      window.location.hash = ''
      setAccessToken(token)
      setIsAuthenticated(true)
      localStorage.setItem('spotify_access_token', token)
    } else {
      const storedToken = localStorage.getItem('spotify_access_token')
      if (storedToken) {
        setAccessToken(storedToken)
        setIsAuthenticated(true)
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
} 