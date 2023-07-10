import React from 'react'
import './MainPage.css';

function MainPage() {
   let contact = {
    "success":true,
    "data":{
        "contacts": [
          {
            "id": "AprPr9IxG71X6qWMTsKSC",
            "name": "mani",
            "email": "test@gmail.com"
          },
          {
            "id": "i3vOErnghB_CGAO79pyLc",
            "name": "mike John",
            "email": "mike@gmail.com"
          },
          {
            "id": "3c0e3bc9-79e4-4f89-adf2-ab76a8aac39c",
            "name": "max",
            "email": "max@gmail.com"
          }
        ], 
      }
      };
    let url;
   const task = () => {
    let data = contact.contacts.id;
    let randomId = Math.floor(Math.random * data);
    console.log(randomId,"randonId");
   }
  return (
    <div>
        <nav>
<h1 style={{display:"inline"}}>Meme Generator</h1>
<h6 className='navname'>React Appln</h6>
        </nav>
        <main>
    <input type='text' className='input'/>
    <input type='number' className='input' />
    <button className='submit'>Click</button>
        </main>
    </div>
  )
}

export default MainPage