import "../style/Main.css"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { CiInstagram } from "react-icons/ci"
import { AiOutlineYoutube } from "react-icons/ai"
import { PiTelegramLogoLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import  iphone from "../assets/iphone.png"
import { useState } from "react"
import Modal from "./Modal"
const Main = () => {
  const [ isOpenModal, setIsOpenModal ] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <div className="main">
      <div className="container">
        <div className="main_content">
          <div className="main_left">
            <h1>
              <span>New</span> <br />
                iPhone 15 Pro
                Titanium
            </h1>
            <p>
              iPhone 15 Pro is the first iPhone to support USB 3,6 for <br /> 
              a huge leap in data transfer speeds and faster pro <br />
              workflows than ever before.
            </p>
              { isOpenModal && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
            <div className="btn_group">
              <button>Learn More</button>
              <button onClick={() => openModal()}>Buy now</button>
            </div>
            <div className="social_group">
              <Link className="link_social">
                <FiFacebook/>
              </Link>
              <Link className="link_social">
                <CiInstagram/>
              </Link>
              <Link className="link_social">
                <AiOutlineYoutube/>
              </Link>
              <Link className="link_social">
                <FiTwitter/>
              </Link>
              <Link className="link_social">
                <PiTelegramLogoLight/>
              </Link>
            </div>
          </div>
          <div className="main_right">
            <img src={iphone} alt="iphone" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main