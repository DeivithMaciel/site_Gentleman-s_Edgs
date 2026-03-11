import { useEffect, useState } from 'react'
import { Loader } from './components/Loader'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return <>
    <GlobalStyles/>
    <Home />
    </>
}

export default App
