import { useState } from "react";

function Login() {
 const [userLoggedIn, setUserLoggedIn] = useState(false);
 const [user, setUser] = useState({
    name: "", 
    email: ""
 });

 function handleInputChhange(e) {
    const {name, value} = e.target

    setUser(function(previousValues) {
        return {
            ...previousValues,
            [name]: value
        }
    })
 }

 function handleSubmit(e) {
    e.preventDefault();
    setUserLoggedIn(!userLoggedIn)
 };

  return (
    <div>
      {userLoggedIn ? (
        <div>
            <h1>{user.name}</h1>
            <span>{user.email}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
          <input onChange={handleInputChhange} name="name" type="text" placeholder="Username" />
          <input onChange={handleInputChhange} type="email" name="email" placeholder="email" />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}


export default Login