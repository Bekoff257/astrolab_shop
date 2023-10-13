import { IoMdNotificationsOff } from "react-icons/io"
import { PiFlashlightLight } from "react-icons/pi"
import { LiaSearchPlusSolid } from "react-icons/lia"
import { MdEmojiPeople } from "react-icons/md"
import { RiVoiceprintFill } from "react-icons/ri"
import { RiTranslate2 } from "react-icons/ri"
import { FiCamera } from "react-icons/fi"
import { BsFillMoonFill, BsLayers } from "react-icons/bs";
import "../style/Tab.css"
import { useEffect, useState } from "react"
import iphoneBorder from "../assets/iphone_border.png"
import silantImg from "../assets/silent.png"
import focusImg from "../assets/focus.png"
import camreraImg from "../assets/camera.jpg"
import flashImg from "../assets/flash.png"
import voiceImg from "../assets/voice.jpg"
import translateImg from "../assets/translate.jpg"
import magniferImg from "../assets/magnifer.jpg"
import shortcutImg from "../assets/shortcut.jpg"
import emojipeopleImg from "../assets/people.jpg"

const Tab = () => {
    // const video = useRef();
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const allTabs = [
        {
            label: 'Silent mode',
            icon: <IoMdNotificationsOff/>,
            src: silantImg
        },
        {
            label: 'Focus',
            icon: <BsFillMoonFill/>,
            src: focusImg
        },
        {
            label: 'Camera',
            icon: <FiCamera/>,
            src: camreraImg
        },
        {
            label: 'Flash',
            icon: <PiFlashlightLight/>,
            src: flashImg
        },
        {
            label: 'Voice Memo',
            icon: <RiVoiceprintFill/>,
            src: voiceImg
        },
        {
            label: 'Translate',
            icon: <RiTranslate2/>,
            src: translateImg
        },
        {
            label: 'Magnifer',
            icon: <LiaSearchPlusSolid/>,
            src: magniferImg
        },
        {
            label: 'Shortcut',
            icon: <BsLayers/>,
            src: shortcutImg
        },
        {
            label: 'Accessibility',
            icon: <MdEmojiPeople/>,
            src: emojipeopleImg
        }
    ]
   useEffect(() => {
        // video.current.currentTime = 2
        // video.current.classList.add("video-active")
   }, [currentTabIndex])
  return (
    <div className="tab">
        <div className="container">
            <div className="tab_content" >
                <div className="tab_right">
                    <p>The all‑new Action button is a fast track to your <br /> favorite feature. Once you set the one you want,<br /> just press and hold to launch the action.</p>
                    <div className="tabs">
                        <ul>
                           {
                            allTabs.map((tab, index) => (
                                <li className={currentTabIndex === index ? "active" : ""} key={index} onClick={() => {setCurrentTabIndex(index) }}>
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </li>
                            ))
                           }
                        </ul>
                    </div>
                </div>
                <div className="tab_left" >
                    {/* <video className="video video-active" ref={video} style={{width: "300px"}} autoPlay muted src={allTabs[currentTabIndex].src}></video> */}
                    <div className="img_container">
                        <div className="sc_ct">
                            <img className="border-image" src={iphoneBorder} alt="" />
                            <img className="iphone_tab" src={allTabs[currentTabIndex].src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tab