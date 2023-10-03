import { useState } from "react"
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  
  const msgHolder = 'Lorem ipsum?'
  const nameHolder = 'The Rock'
  const emailHolder = 'rocky@gmail.com'
  const subjectHolder = 'Let\'s get you hired!'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('');

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isEmailValid = regex.test(email)


  // let isInvalid = !name || !isEmailValid || !subject || !message;
  let isInvalid = !name || !isEmailValid || !message;

  const notify = () => {
    toast.success("Thanks for your message!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_u2smn3d", e.target, "e_Wn1g4MXoyuGGwAM")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };


  return (
    <>
      <div className="contact-heading"><h1>Let's Connect!</h1></div>
      
      <form onSubmit={sendEmail} className='contact-form'>
        <div className="name-and-email">
          <div className="mb-3 name">
            <label htmlFor="name" className="form-label">Name<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" name="name"
              aria-describedby="nameHelp" placeholder={nameHolder}
              value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3 email">
            <label htmlFor="email" className="form-label">Email<span style={{color:"red"}}>*</span></label>
            <input type="email" className="form-control" name="email"
             aria-describedby="emailHelp" placeholder={emailHolder}
             value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" name="subject"
           aria-describedby="subjectHelp" placeholder={subjectHolder}
           value={subject} onChange={(e) => setSubject(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message<span style={{color:"red"}}>*</span></label>
          <textarea type="text" className="form-control message"
           name="message" aria-describedby="messageHelp" placeholder={msgHolder}
           value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="mt-4 mb-3 submit"title="Submit button disabled till all required fields contain valid data">
          <button disabled={isInvalid} type="submit" onClick={notify} className="btn btn-primary submit-btn" 
          >SUBMIT</button>
        </div>
      </form>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
    </>
  )
}
