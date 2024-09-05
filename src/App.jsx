import { useState } from "react";
import "./index.css";
import Li from "./Li";

function App({ name }) {
  let [alexis, setAlexis] = useState(0);
  const [state, setState] = useState("set state 3");

  function sendMessage() {
    alert("Hello");
  }

  const myArray = ["Banana", "Mango", "Orange", "apple"];

  // Challenge 1.
  // create a react app from scratch.
  // It should display a h1 heading.
  // It should display an unordered list.
  // It should contain 3 list elements.

  // Challenge 2. (Javascript expression in jsx)
  // Create a react app from scratch
  // It should display 2 paragraph HTML elements.
  // The paragraphs should say:
  // Created by YOUR NAME
  // Copyright CURRENTYEAR
  // E.g
  // Created by Afolabi Opeyemi
  // Copyright 2024

  // Challenge 3
  // Build a greeting functionality
  // It should greet good morning, afternoon or evening depending on the time

  // Challenge 4 (import / export)
  // Write a calculator file
  // write fuctions for add, multiply, subtract and divide
  // Export the functions from the calculator file
  // Import and use the exported functions in a new file

  //1. Create a new React app.
  //2. Create a App.jsx component.
  //3. Create a Header.jsx component that renders a <header> element
  //to show the Keeper App name in an <h1>.
  //4. Create a Footer.jsx component that renders a <footer> element
  //to show a copyright message in a <p> with a dynamically updated year.
  //5. Create a Note.jsx component to show a <div> element with a
  //<h1> for a title and a <p> for the content.
  //6. Make sure that the final website is styled like the example shown here:
  //https://l1pp6.csb.app/
  //HINT: You will need to study the classes in the keeper.css file to appy styling.

  const time = new Date().getHours();
  let greeting;
  const style = {
    color: "",
  };

  console.log(time);

  if (time < 12) {
    greeting = "Morning";
    style.color = "blue";
  }

  if (time > 12 && time < 16) {
    greeting = "Afternoon";
    style.color = "yellow";
  }

  if (time >= 16) {
    greeting = "Evening";
    style.color = "green";
  }

  const url =
    "https://a.media-amazon.com/images/I/81+V4wyjHXL._AC_SY300_SX300_.jpg";

  function increaseAlexisNumber() {
    // console.log("increasing number")
    setAlexis(function () {
      return alexis++;
    });
    // setState("New State 2");
  }

  function decreaseAlexisNumber() {
    setAlexis(function () {
      return alexis--;
    });
  }

  function setaNewState() {
    setState("resetting new state 3");
  }

  const contact = {
    fName: "Afolabi",
    lName: "Opeyemi",
    email: "yemijoshua81@gmail.com",
    walk: function () {
      console.log(this.fName, " can walk");
    },
  };

  // const lName = contact.lName
  // const fName = contact.fName
  // const email = contact.email

  // const { fName, lName, email } = contact;

  const newContact = {
    ...contact,
    password: "kkjasjndjasd",
  };

  const condition = false;

  return (
    <div>
      <h1 style={{ ...style, cursor: "pointer" }}>Good {greeting}</h1>

      <h1
        style={{ fontSize: "40px", color: "blue" }}
        contentEditable="false"
      ></h1>
      <br />

      <img style={{ cursor: "pointer" }} onClick={setaNewState} src={url} />
      <br />

      {/* {condition ? (
        <div>
          <button onClick={decreaseAlexisNumber}>decrease</button>
          <h1>{alexis}</h1>
          <button onClick={increaseAlexisNumber}>increase</button>
          <h1>{state}</h1>
        </div>
      ) : (
        <div>
          <h1>Can not count</h1>
        </div>
      )} */}

      {/* {condition && (
        <div>
          <form action=""></form>
        </div>
      )} */}

      {/* {myArray.map(function (item) {
        return <Li text={item} />;
      })}

      <button onClick={sendMessage}>add 12</button> */}
    </div>
  );
}

export default App;
