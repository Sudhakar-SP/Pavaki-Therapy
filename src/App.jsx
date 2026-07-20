import { AnimatePresence } from 'framer-motion'
import { useLoadingScreen } from './hooks/useScrollAnimation'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'

function App() {
  const loading = useLoadingScreen(2200)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}

export default App
