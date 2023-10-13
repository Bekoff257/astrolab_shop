import { register } from "swiper/element/bundle";
import { Link } from 'react-router-dom';
import "../style/Airpods.css"
import Modal from './Modal';
import { useState } from 'react';
import bigWatch from "../assets/big_iwatch.png"
import iwatch1 from "../assets/iwatch1.png"
import iwatch2 from "../assets/iwatch2.png"
import iwatch3 from "../assets/iwatch3.png"

register();

import "../style/Iphone.css"
import 'swiper/css';
import 'swiper/css/navigation';

const Airpods = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const airPodsArray = [
        {
            name: 'Apple Watch Ultra',
            desc: 'The most rugged and capable.',
            price: 'From $.599',
            img: iwatch1
        },
        {
            name: 'Apple Watch Ultra',
            desc: 'The most rugged and capable.',
            price: 'From $.599',
            img: iwatch2
        },
        {
            name: 'Apple Watch Ultra',
            desc: 'The most rugged and capable.',
            price: 'From $.599',
            img: iwatch3
        },
    ]

  return (
    <div className="airpods_shop">
        {modal && <Modal setIsOpenModal={setModal}/>}
        <div className="container">
            <div className="airpods_content">
                <div className="top_text">
                    <h1>Which  Watch is right for you?</h1>
                </div>
                <div className="airpods">
                    <div className="air_right">
                        <img src={bigWatch} alt="" />
                    </div>
                    <div className="air_left">
                        {
                            airPodsArray.map((item, index) => {
                                return (
                                    <>
                                        <div className="lists" key={index}>
                                            <div className="list_img">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="list_info">
                                                <h2>{item.name}</h2>
                                                <div className="list_desc-btn">
                                                    <p>{item.desc}</p>
                                                    <button onClick={() => openModal()}>Order-now</button>
                                                </div>
                                                <h3>{item.price}</h3>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Airpods