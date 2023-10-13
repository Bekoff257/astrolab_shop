import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronRight } from "react-icons/fi"
import  iphone_1 from "../assets/iphone_1.png"
import  iphone_2 from "../assets/iphone_2.png"
import iphone_3 from "../assets/iphone_3.png"
import  iphone_4 from "../assets/iphone_4.png"
import { register } from "swiper/element/bundle";
import { Link } from 'react-router-dom';
import { useState } from 'react';
register();

import "../style/Iphone.css"
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from './Modal';
import { Element } from 'react-scroll';

const IphonesShop = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
  return (
    <Element id='phone'>
        <div className="iphone_shop">
        {modal && <Modal setIsOpenModal={setModal}/>}
        <div className="container">
            <div className="phone_content">
                <div className="top_text">
                    <h1>Which iPhone is right for you?</h1>
                </div>
                <div className="iphones">
                    <Swiper

                            breakpoints={{
                                360: {
                                width: 360,
                                slidesPerView: 1,
                                },
                                460: {
                                width: 460,
                                slidesPerView: 1.7,
                                },
                                560: {
                                width: 560,
                                slidesPerView: 2,
                                },
                                760: {
                                width: 760,
                                slidesPerView: 3,
                                },
                            }}
                            draggable={true}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                           <SwiperSlide className='swiper'>
                                <div className="iphone_imgcontainer">
                                    <img className='sw_img' src={iphone_1} alt="Iphone_1" />
                                </div>
                                <div className="info_sec">
                                <div className="new_section">
                                        <span className='new'>New</span>
                                </div>
                                <div className="text_info">
                                    <p>iPHONE 15 Pro</p>
                                    <h5>The ultimate iPhone.</h5>
                                    <div className="price_section">
                                        <span className='price'>From $999</span>
                                    </div>
                                    <div className="btn_shop">
                                        <button className='buy_btn' onClick={() => openModal()}>Pro-order</button> <br />
                                        <button className='learn_more'>Learn more <FiChevronRight/></button>
                                    </div>
                                </div>
                                </div>
                           </SwiperSlide>
                           <SwiperSlide>
                                <div className="iphone_imgcontainer">
                                    <img className='sw_img' src={iphone_2} alt="Iphone_1" />
                                </div>
                                <div className="info_sec">
                                <div className="new_section">
                                        <span className='new'>New</span>
                                    </div>
                                <div className="text_info">
                                    <p>iPHONE 15 </p>
                                    <h5>A totol power house.</h5>
                                    <div className="price_section">
                                        <span className='price'>From $799*</span>
                                    </div>
                                    <div className="btn_shop">
                                        <button className='buy_btn' onClick={() => openModal()}>Pro-order</button> <br />
                                        <button className='learn_more'>Learn more  <FiChevronRight/></button>
                                    </div>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="iphone_imgcontainer">
                                    <img className='sw_img' src={iphone_3} alt="Iphone_1" />
                                </div>
                                <div className="info_sec">
                                    <div className="new_section">
                                        <span className='new'></span>
                                    </div>
                                <div className="text_info">
                                    <p>iPHONE 14 Pro</p>
                                    <h5>As amazing as ever.</h5>
                                    <div className="price_section">
                                        <span className='price'>From $699*</span>
                                    </div>
                                    <div className="btn_shop">
                                        <button className='buy_btn' onClick={() => openModal()}>Buy</button> <br />
                                        <button className='learn_more'>Learn more  <FiChevronRight/></button>
                                    </div>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="iphone_imgcontainer">
                                    <img className='sw_img' src={iphone_4} alt="Iphone_1" />
                                </div>
                                <div className="info_sec">
                                <div className="new_section">
                                        <span className='new'></span>
                                </div>
                                <div className="text_info">
                                    <p>iPHONE 14</p>
                                    <h5>Serios power.</h5>
                                    <div className="price_section">
                                        <span className='price'>From $559*</span>
                                    </div>
                                    <div className="btn_shop">
                                        <button className='buy_btn' onClick={() => openModal()}>Buy</button> <br />
                                        <button className='learn_more'> <Link>Learn more</Link> <FiChevronRight/></button>
                                    </div>
                                </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default IphonesShop