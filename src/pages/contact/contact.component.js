import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './contact.style.scss'

const Contact = () => {
    return (
        <>
            <form className='contactForm' >
                <div className='contactFormInputsHolder' >
                    <div className='inputContainer' >
                        <label htmlFor='name' >Full Name</label>
                        <input className='contactInput' id='name' placeholder='John Doe' />
                    </div>
                    <div className='inputContainer' >
                        <label htmlFor='email' >Email</label>
                        <input className='contactInput' id='email' placeholder='jonDoe@gmail.com' />
                    </div>
                </div>
                <div className='textAreaContainer' >
                    <textarea placeholder='Type a message...' ></textarea>
                    <CustomButton >Send Message</CustomButton>
                </div>


            </form>

        </>

    )
}

export default Contact