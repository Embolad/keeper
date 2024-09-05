import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleContactChange(e) {
    const {name, value} = e.target;

    setContact(function(prev) {
        return {
            ...prev,
            [name]: value
        }
    })
  };

  return (
    <div className="">
      <div>
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <span>{contact.email}</span>
      </div>

      <form action="">
        <input onChange={handleContactChange} type="text" name="fName" placeholder="fName" />
        <br />
        <input onChange={handleContactChange} type="text" name="lName" placeholder="lName" />
        <br />
        <input onChange={handleContactChange} type="email" name="email" placeholder="email" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}


export default Contact;