'use client'
import { useState } from "react";

let letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];


export default function Home() {
   const word = 'Hangman'
  const [ guessWord,setguessWord] = useState('_______')
  const [ image,setimage] = useState(1)
  const correctWord = 'Hangman'
  const handleGuess =(val)=>{
    if ( !correctWord.includes(val)){
        setimage(image+1)
    } 
    else {
        guessWord.split('').map((val,id)=>{
          
        })
    }
  } 
   
 


    

  return (
   <div className=" justify-center m-10 ">
  
    <div className="mt-20">
    <img src={`hang_${image}.gif`} alt='hangman'/>
    </div>
    <div className="mt-10 flex  flex-col">
      <div className="flex gap-3">
       {guessWord.split('').map((val,id)=>{
     return (<div key ={id} className="">
           {val}
     </div>)
  })}
  </div>
      <div className=" flex mt-6">
      {letters.map((item,id)=>{
        return (<div key = {id} className="bg-black text-white p-2 m-2" onClick={()=>handleGuess(item)} >
         {item}
        </div>)
      })}
     </div>
    </div>
   </div>
  );
}
