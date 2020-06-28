import React, {useState} from "react";
import "../Css/Contact.css";

export default function Contact() {
  const [sended, setsended] = useState(false)
  const [informations, setInformations] = useState({
    name: "",
    email: "",
    topic: "",
    text: "", 
  });
  const sending = async (e) => {    
    e.preventDefault()
 const send = await fetch("http://localhost:3002/send",{
  method: 'post',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(informations)
})
const test = await send.json()
if(test.msg === 'success'){
  setsended(true)
  setTimeout(()=> {
    setsended(false)
  }, 4000)
}
setInformations({
  name: "",
  email: "",
  topic: "",
  text: "", 
})
  }
  return (
    <div className="contact" onSubmit={sending} method="POST">
    <p className="fixedEmailSend" style={sended?{opacity:1}:{opacity:0}}>Email envoyée, à bientot. <span role="img" aria-label="smilling">😊</span></p>
      <h3>
        Stay <span className="greyfy">In</span> Touch
      </h3>
      <form>
        <div className="packingForm">
          <label htmlFor="fullname">FULL NAME</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Sundar Pichai"
            value={informations.name}
            onChange={(e) => setInformations({...informations, name : e.target.value})}
          />
        </div>
        <div className="packingForm">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            value={informations.email}
            placeholder="steve@apple.com"
            onChange={(e) => setInformations({...informations, email : e.target.value})}
          />
        </div>
        <div className="packingForm">
          <label htmlFor="topic">SUBJECT</label>
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="Hire You"
            value={informations.topic}
            onChange={(e) => setInformations({...informations, topic : e.target.value})}
          />
        </div>
        <div className="packingFormTextarea">
          <textarea
            placeholder="Hello World!"
            name="text"
            value={informations.text}
            onChange={(e) => setInformations({...informations, text : e.target.value})}
          />
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
}
