import "../style/iwatch.css"
import { useState } from "react"
import Modal from "./Modal"
import bigWatch from "../assets/big_watch.png"
import air1 from "../assets/air2.png"
import air3 from "../assets/air3.png"

const IWatch = () => {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }
  return (
    <div className="watch">
        {modal && <Modal setIsOpenModal={setModal}/>}

      <>
        <div className="container">
          <div className="wt_content">
          <h1 className="wt_right-h1">Which AirPods  is right for you?</h1>
            <div className="anim_airs">
              <img className="air1" src={air1} alt="air_1" />
            </div>
            <div className="wt-main_content">
              <div className="wt_right">
                <h1>
                  Headphones <br />
                  <span>true</span> apple <span>AirPods</span> <br /> 
                  <span>Max</span>
                </h1>
                <p>All the essentials.</p>
                <div className="wt-btn">
                  <button onClick={() => openModal()}>Order-now</button>
                </div>
              </div>
              <div className="wt_left">
                <img src={bigWatch} alt="watch" />
              </div>
            </div>
            <div className="anim_airs">
              <img className="air3" src={air3} alt="air_2" />
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default IWatch