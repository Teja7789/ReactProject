import React, { useState } from 'react'
import './MainPage.css';
import DailyPractice from './DailyPractice';


// import memesArray from './MemesData';
// function MainPage() {
//   const [nameData,setNameData] =useState("");
//    let contacts = [
//           {
//             "id": "1",
//             "name": "mani",
//             "url": "https://via.placeholder.com/600/92c952",
//           },
//           {
//             "id": "2",
//             "name": "mike John",
//             "url": "https://via.placeholder.com/600/771796",
//           },
//           {
//             "id": "3",
//             "name": "max",
//             "url": "https://via.placeholder.com/600/24f355",
//           }
//         ];
//       //   let  randomId = Math.floor(Math.random() * contacts.length);
//       // console.log(randomId,"randonId");
     
//    const task = () => {
//     let data = contacts.map((item)=>{
//       return item.url
//     });
//     console.log(data,"data");
//     let randomId = Math.floor(Math.random() * contacts.length);
//     console.log(contacts[randomId].name,"randonId");
//     setNameData(contacts[randomId].url);
    
//     // console.log(randomId,425);
//    }
//   //  console.log(task,"1234")
//   return (
//     <div>
//         <nav>
// <h1 style={{display:"inline"}}>Meme Generator</h1>
// <h6 className='navname'>React Appln</h6>
//         </nav>
//         <main>
//     <input type='text' />
//     <input type='number'  />
//     <button onClick={task} className='submit'>Click</button>
//         </main>
//         <section>
//           {/* <h1>{nameData}</h1> */}
//         <img src={nameData} className='imageMeme'/>
//         </section>
//         {/* <DailyPractice/> */}
//     </div>
//   )
// }

// export default MainPage


// pass array data into objects
let contacts = [
  {
    "id": "1",
    "name": "mani",
    "url": "https://via.placeholder.com/600/92c952",
  },
  {
    "id": "2",
    "name": "mike John",
    "url": "https://via.placeholder.com/600/771796",
  },
  {
    "id": "3",
    "name": "max",
    "url": "https://via.placeholder.com/600/24f355",
  }
];
function MainPage() {
  const [nameData,setNameData] =useState(contacts);
const [objData,setObjData] = useState({
  firstText:"",
  lastText:"",
  randomImage:"https://via.placeholder.com/600/92c952",
})
 
      
     
   const task = () => {
 
    let randomId = Math.floor(Math.random() * contacts.length);
    let url  = contacts[randomId].url;
    // setNameData(contacts[randomId].url);
  setObjData(prevObjData =>{
    return {
      ...prevObjData,
      randomImage: url
    }
  })
   
   }
  
  return (
    <div>
        <nav>
<h1 style={{display:"inline"}}>Meme Generator</h1>
<h6 className='navname'>React Appln</h6>
        </nav>
        <main>
    <input type='text' />
    <input type='number'  />
    <button onClick={task} className='submit'>Click</button>
        </main>
        <section>
        
        <img src={objData.randomImage} className='imageMeme'/>
        </section>
    
    </div>
  )
}

export default MainPage