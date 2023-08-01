import { useState } from "react"

export default function Contact() {
  //add form validation
  // make submit button disabled till validation requirements 
  // are met.
  const msgHolder = 'It\'s really cool :)'
  const nameHolder = 'The Rock'
  const emailHolder = 'rocky@gmail.com'
  const subjectHolder = 'Love your page!'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('');

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isEmailValid = regex.test(email)


  let isInvalid = (!name || !isEmailValid || !subject || !message)

  const onSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setSubject('')
    setMessage('');
    // return true
  }

  // let sent = onSubmit;

  return (
    <>
      <div className="contact-heading"><h1>Let's Connect!</h1></div>
      
      <form className='contact-form'>
        <div className="name-and-email">
          <div className="mb-3 name">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name"
              aria-describedby="emailHelp" placeholder={nameHolder}
              value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3 email">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"
             aria-describedby="emailHelp" placeholder={emailHolder}
             value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject"
           aria-describedby="emailHelp" placeholder={subjectHolder}
           value={subject} onChange={(e) => setSubject(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea type="text" className="form-control message"
           id="message" aria-describedby="emailHelp" placeholder={msgHolder}
           value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="mb-3 submit">
          <button disabled={isInvalid} type="submit" onClick={onSubmit} className="btn btn-primary submit-btn">SUBMIT</button>
        </div>
      </form>
      {/* {sent && (
        <h2>Thanks for your message!</h2>
      )} */}
    </>
  )
}
