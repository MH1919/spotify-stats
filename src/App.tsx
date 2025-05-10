import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Callback from './pages/Callback'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/callback" element={<Callback />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
