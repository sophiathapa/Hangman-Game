'use client'
import { useState } from "react";

let letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];


export default function Home() {
  const [ guessWord,setguessWord] = useState('_______')
  const [ image,setimage] = useState(1)
  const [index,setIndex]  = useState([])
  const correctWord = 'hangman'
  const handleGuess =(val)=>{
      const isIncluded = correctWord.includes(val)
    if (isIncluded){
        const matchedIndex = correctWord.split('').map((item,id)=>{
      if (item == val) 
        return id 
        }).filter(item=> item || item == 0)

        setIndex([...index, ...matchedIndex])
        guessWord.split("").map((val,id)=>{
        })
    } 

    else {     
        setimage(image+1)
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
           {index.includes(id) ? correctWord[id] : '_'}
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
