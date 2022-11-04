import React from 'react'

function Contact() {
    const name = `{name}`
  return (
        <div className='form_container'>
         <div className='form'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
            <div className='names_input'>
                <div>
                    <label>First name</label>
                    <input type='text' id='first_name' placeholder='Enter your first name'/>
                </div>
                <div>
                    <label>Last name</label>
                    <input type='text' id='last_name' placeholder='Enter your last name'/>
                </div>
            </div>
            <div>
                <label>Email</label>
                <input type='email' id='email' placeholder='yourname@email.com'/>
            </div>
            <div>
                 <label>Message</label>
                 <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible..."/>
            </div>
        
            <div className='agree_input'>
                 <input type='checkbox'/> <p>You agree to providing your data to {name} who may contact you.</p>

            </div>
            <button id='btn__submit'>Send message</button>

        </div>
    </div>
   
  )
}

export default Contact