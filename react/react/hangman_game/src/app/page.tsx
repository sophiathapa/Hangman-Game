'use client'
import { useState } from "react";

let letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

export default function Home() {
  const [ guessWord,setguessWord] = useState('_______')
  const [ image,setimage] = useState(1)
  const [index,setIndex]  = useState([])
  const[color,setColor] = useState('bg-black')
  const correctWord = 'HANGMAN'
  const handleGuess =(val)=>{
      const isIncluded = correctWord.includes(val)
    if (isIncluded){
        const matchedIndex = correctWord.split('').map((item,id)=>{
      if (item == val) 
        return id 
        }).filter(item=> item || item == 0)

        setIndex([...index, ...matchedIndex])
        
    } 

    else {     
        setimage(image+1)
        setColor('bg-gray-500')
    }
  } 

  return (
   <div className=" justify-center m-10 ">
    <div className="mt-20">
    <img src={`hang_${image}.gif`} alt='hangman'/>
    </div>
    <div className=" flex  flex-col">
      <div className="flex gap-3 justify-center">
       {guessWord.split('').map((val,id)=>{
     return (<div key ={id} className="">
           {index.includes(id) ? correctWord[id] : '_'}
     </div>)
  })}
  </div>
      <div className=" mt-15">
      {(image <7 && correctWord.length !== index.length) && keyboard.map((val,id)=>{
        return(<div key = {id} className="flex justify-center item-center ">{

          val.map((item,idx)=>{
          return(<div key = {idx} className={`p-2 m-2 bg-black text-white`}  onClick={()=>handleGuess(item)}>
                {item}
            </div>
          )
        })
         }</div>
      )})}
     </div>
    </div>
   </div>
  );
}
