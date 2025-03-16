import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ScrollToUp from './components/ScrollToUp/ScrollToUp'
import RootPage from './pages/RootPage'

function App() {

  return (
    <>
      <Navbar/>
        <RootPage/>
      <Footer/>
      <ScrollToUp/>
    </>
  )
}

export default App
