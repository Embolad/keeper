import emojis from "./emojipedia";
import App from "./App";
import { useState } from "react";
import Li from "./Li";
import Button from "./Button";


function Map() {
    let name = "My name is Opeyemi"

    const newEmojis = emojis.filter(function(emoji) {
        return emoji.name.includes("3")
    })

    const condition = false
    
    name = condition ? "Condition is true" : "Condition is false"

    return (
        <div className="">
            {/* <App /> */}
            {
                newEmojis.map(function (emoji) {
                    return <h1>{emoji.name}</h1>
                })
            }
            {
               condition ? <h1>{name}</h1> : <h1>I cannot tell you my name</h1>
            }
            <Button text="Buy Now" /> <br /><br />
            <Button text="Book an appointment" />
        </div>
    );
}

export function Keeper2() {
    return(
        <div className="">
            <h1>Keeper 2</h1>
        </div>
    )
}


export default Map;