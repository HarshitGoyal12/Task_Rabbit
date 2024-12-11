import React from react;
import {useState,useEffect} from react

function Home(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    function handleSubmit(){
        //data from front end to backend travel
    }

    return (
        <div> 
         <input type="text" placeholder="Enter your name" required/>
         <input type="email" placeholder="Enter your email" required/>
         <input type='password' placeholder="Enter your password" required/>
         <button type="submit" onclick={handleSubmit}>Submit</button>
        </div>
    )
}