import React from 'react'
import "./../form/Form.css"

function Form() {
  return (
    <div className='Form'>
      <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows={6} placeholder='Type your message here'></textarea>
        <button className='btn'>Subit</button>
      </form>
    </div>
  )
}

export default Form