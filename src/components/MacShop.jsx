import { register } from "swiper/element/bundle";
import Modal from './Modal';
import mac1 from '../assets/mac1.png';
import mac2 from '../assets/mac2.png';
import "../style/Mac.css"
import { useState } from 'react';
register();

import "../style/Iphone.css"
import 'swiper/css';
import 'swiper/css/navigation';
import { Element } from "react-scroll";

const Macbook = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const macShopArray = [
        {
            name: 'MacBook Pro 14 “and 16 “',
            desc: 'M2 Pro or M2 Max chip',
            price: 'From $.2599',
            img: mac1
        },
        {
            name: 'iPad Pro 14 “and 16 “',
            desc: 'The fill iPad experience one hand.',
            price: 'From $.2599',
            img: mac2
        }
    ]

  return (
    <>
        <div className="top_text">
        <h1>Which Mac iPad are right for you?</h1>
    </div>
    <Element id="mac">
    <div className="macbook_shop">
        {modal && <Modal setIsOpenModal={setModal}/>}
        <div className="container">
            <div className="macbook_content">
                <div className="macbook">
                    {
                        macShopArray.map(item => {
                            return (
                                <>
                                    <div className="item">
                                        <div className="mac_img-content">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="item_info">
                                            <h2>{item.name}</h2>
                                            <p>{item.desc}</p>
                                            <div className="item_price">
                                                <span>{item.price}</span>
                                            </div>
                                            <div className="buy-mac_btn">
                                                <button onClick={() => openModal()}>
                                                    Order-now
                                                </button>
                                            </div>
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
    </Element>
    </>
  )
}

export default Macbook