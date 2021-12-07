import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; 

const RecoverPassword = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('@gmail', 'my-proyect-leo-333815', form.current, 'user_abCQd2xzVDyGeekYBgcBK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return ( 
    // <div className="login-box">
    //         <h1>logo</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    // </div>
     );
}
 
export default RecoverPassword; 
 