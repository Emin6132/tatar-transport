import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css"

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [nameErr, setNameErr] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [msgErr, setMsgErr] = useState("")


  const nameChangeHandler = (e) => {
    setName(e.target.value)

    if (name.length > 1) {
      setNameErr("")
    }
  }
  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const msgChangeHandler = (e) => {
    setMsg(e.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length == 0) {
      setNameErr("Lütfen bir isim giriniz")
      return;
    }
    else if (name.length < 3) {
      setNameErr("Lütfen doğru bir isim giriniz")
      return;
    }

    const email_patern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    if (email.length == 0) {
      setEmailErr("Lütfen bir email giriniz")
      return;
    }
    else if (!email_patern.test(email)) {
      setEmailErr("Düzgün bir Email kullanın")
      return;
    } else if (email_patern.test(email)) {
      setEmailErr("")
    }

    if (msg.length == 0) {
      setMsgErr("Lütfen bir mesaj yazınız")
      return;
    }


    alert("Mesajınız Bize İletildi")

    emailjs.sendForm('service_shff9tk', 'template_5s2e01o', form.current, 'lPD-RCOpy30Jokt4Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });




    setName("")
    setEmail("")
    setMsg("")
    setNameErr("")
    setEmailErr("")
    setMsgErr("")
  };
  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <div className='contact-form-area'>
            <h1 className='form-title'>İletişim</h1>
            <label>İsim</label>
            <input type="text" name="user_name" className='name-input form-input' onChange={nameChangeHandler} value={name} placeholder='İsim' />
            <span className='err-msg'>{nameErr}</span>
            <label>Email</label>
            <input type="text" name="user_email" className='email-input form-input' onChange={emailChangeHandler} value={email} placeholder='Email' />
            <span className='err-msg'>{emailErr}</span>
            <label>Mesaj</label>
            <textarea name="message" onChange={msgChangeHandler} className='msg-input' value={msg} placeholder='Mesaj' />
            <span className='err-msg'>{msgErr}</span>
            <input type="submit" value="Gönder" className='form-submit-button' />
          </div>

          <div className='contact-form-in-contact-us'>
            <div className="adress-info">
              <span className='icon-bg'>
                <i class="fa-solid fa-location-dot location-info-icon infos-icon"></i>              </span>
              İstanbul/Kartal/Soğanlık/ <br />Yeni mahalle/Atatürk caddesi/no:7
            </div>
            <div className='email-info'>
              <span className='icon-bg'>
                <i class="fa-solid fa-paper-plane email-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Email:</span> tatarnakliyat61@gmail.com
            </div>
            <div className="phone-info">
              <span className='icon-bg'>
                <i class="fa-solid fa-phone phone-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Telefon Numarası:</span>  0539 858 73 61
            </div>
          </div>
        </form>


        <div className="contact-us">
          <div className="contact-us-in">
            <h1 className='contact-us-title'>Bize Ulaşın</h1>
            <div className="adress-info">
              <span className='icon-bg'>
                <i class="fa-solid fa-location-dot location-info-icon infos-icon"></i>              </span>
              İstanbul/Kartal/Soğanlık/ <br />Yeni mahalle/Atatürk caddesi/no:7
            </div>
            <div className="phone-info">
              <span className='icon-bg'>
                <i class="fa-solid fa-phone phone-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Telefon Numarası:</span>  0539 858 73 61
            </div>
            <div className='email-info'>
              <span className='icon-bg'>
                <i class="fa-solid fa-paper-plane email-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Email:</span> tatarnakliyat61@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact