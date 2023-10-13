import './App.css'
import Airpods from './components/AirPodsShop'
import Footer from './components/Footer'
import IphonesShop from './components/IphonesShop'
import Macbook from './components/MacShop'
import Main from './components/Main'
import Nav from './components/Nav'
import Tab from './components/Tab'
import Vidoes from './components/Vidoes'

function App() {

  return (
    <>
     <Nav/>
     <Main/>
     <IphonesShop/>
     <Airpods/>
     <Macbook/>
     <Tab/>
     <Vidoes/>
     <Footer/>
    </>
  )
}

export default App
