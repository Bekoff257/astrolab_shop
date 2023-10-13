import './App.css'
import Airpods from './components/AirPodsShop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IphonesShop from './components/IphonesShop'
import Macbook from './components/MacShop'
import Main from './components/Main'
import Nav from './components/Nav'
import Tab from './components/Tab'
import Vidoes from './components/Vidoes'
import IWatch from './components/iWatch'

function App() {

  return (
    <>
     <Nav/>
     <Main/>
     <IphonesShop/>
     <Airpods/>
     <IWatch/>
     <Macbook/>
     <Tab/>
     <Vidoes/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
