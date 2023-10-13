import { useState } from "react"
import "../style/Modal.css"
import { LiaTimesSolid } from "react-icons/lia"
import axios from "axios"

let TOKEN = '6524657390:AAE7N-9Th_QbbnKlh3SG5BKYo7DfdyGThcc'
const Modal = (props) => {
    const botToken = TOKEN
    const [ fullname, setFullName ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ description, setDescription ] = useState('')
    const closeModal = () => {
        props.setIsOpenModal(false)
    }

    const handleUsernameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const desHandler = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const chatId = '-4075670150';

        const messageText = `From: Buy \n\nFull Name: ${fullname} \nNumber: ${number} \nDescription: ${description}`;

            try{
                await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    chat_id: chatId,
                    text: messageText
                })
                setFullName('')
                setNumber('')
                setDescription('')
                closeModal()
            }catch(error){
                console.log(error)
            }
            
    }
  return (
    <div className="darkBg">
        <div className="modal">
        <div className="close_top-btn">
        <button className="close-btn" onClick={() => closeModal()}>
            <LiaTimesSolid/>
        </button>
        </div>
        <div className="modal_content"> 
            <h2>Contact us</h2>
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="contact_input">
                    <div className="label">
                        <label htmlFor="name">Full Name</label>
                    </div>
                    <input type="text" id="name" onChange={handleUsernameChange} value={fullname} placeholder="Full Name" required/> <br />
                    <div className="label">
                        <label htmlFor="number">Number</label>
                    </div>
                    <input type="text" id="number" onChange={handleNumberChange} value={number} placeholder="+998 (_ _) _ _ _ - _ _ - _ _" required/>
                   <div className="label">
                    <label>Description</label>
                   </div>
                    <textarea className="description" value={description} cols="30" rows="10" onChange={desHandler} placeholder="Description (not required)"></textarea>
                </div>
                <button className="submit-btn">
                    Send
                </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Modal