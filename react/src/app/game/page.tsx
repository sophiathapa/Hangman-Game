'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setImage,setIndex,setColor} from '@/features/game/gameSlice'



const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]




const Game = () => {
  // const [ guessWord,setguessWord] = useState('_______')
  // const [ image,setimage] = useState(1)
  // const [index,setIndex]  = useState([])
  // const[color,setColor] = useState('bg-black')
  // const correctWord = 'HANGMAN'
  const {correctWord,guessWord} = useSelector((state)=> state.genre)
  const { image, color, index} = useSelector((state)=> state.game)
  const dispatch = useDispatch();
  
  console.log(correctWord)
  const handleGuess =(val)=>{
      const isIncluded = correctWord.includes(val)
    if (isIncluded){
        const matchedIndex = correctWord.split('').map((item,id)=>{
      if (item == val) 
        return id 
        }).filter(item=> item || item == 0)

        dispatch(setIndex([...index, ...matchedIndex]))
        
    } 

    else {   
           dispatch(setImage())
        dispatch(setColor('bg-gray-500'))
    }
  } 

  
  return (
   <div className=" justify-center m-10 ">
    <div className="mt-20">
    <img src={`hang_${image}.gif`} alt='hangman'/>
    </div>
    <div className=" flex  flex-col">
      <div className="flex gap-3 justify-center">
       {guessWord?.split('').map((val,id)=>{
     return (<div key ={id} className="">
           {index.includes(id) ? correctWord[id] : '_'}
     </div>)
  })}
  </div>
      <div className=" mt-15">
      {(image < 7 && correctWord?.length !== index.length) && keyboard.map((val,id)=>{
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


export default Game;