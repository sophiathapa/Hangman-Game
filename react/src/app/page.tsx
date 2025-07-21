'use client'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCorrectWord, setGenre, setInitialGuess, setInitialState1} from "@/features/genre/genreSlice"
import { useRouter } from "next/navigation";
import { persistor } from "./store";
import { setInitialState } from "@/features/game/gameSlice";


const animals = [
    "Dog", "Cat", "Elephant", "Tiger", "Lion", "Bear", "Zebra", "Giraffe", "Kangaroo", "Monkey",
    "Deer", "Fox", "Wolf", "Leopard", "Cheetah", "Rabbit", "Cow", "Buffalo", "Sheep", "Goat",
    "Horse", "Donkey", "Pig", "Camel", "Panda", "Hippopotamus", "Rhinoceros", "Crocodile", "Alligator", "Ostrich",
    "Peacock", "Eagle", "Falcon", "Owl", "Parrot", "Sparrow", "Pigeon", "Duck", "Goose", "Turkey",
    "Chicken", "Hen", "Rooster", "Bat", "Whale", "Dolphin", "Shark", "Octopus", "Seal", "Penguin"
]

const fruits = [
    "Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Papaya", "Guava", "Strawberry", "Blueberry",
    "Watermelon", "Cantaloupe", "Peach", "Pear", "Plum", "Cherry", "Lychee", "Kiwi", "Pomegranate", "Coconut",
    "Lemon", "Lime", "Fig", "Avocado", "Date", "Blackberry", "Raspberry", "Tangerine", "Passionfruit", "Dragonfruit"
]

const things = [
    "Chair", "Table", "Fan", "Clock", "Bottle", "Pen", "Pencil", "Book", "Laptop", "Mobile",
    "Television", "Camera", "Spoon", "Fork", "Knife", "Plate", "Cup", "Bag", "Shoes", "Watch",
    "Mirror", "Window", "Door", "Curtain", "Broom", "Bed", "Pillow", "Blanket", "Towel", "Comb"
]


function Home ()
{
  const {genre, correctWord,initialGuess} = useSelector((state)=> state.genre)
  const dispatch = useDispatch()
  const router = useRouter()

    
  const selectWord = (getGenre) =>{
    let word = ""
    dispatch(setGenre(getGenre))

    if (getGenre ==="animals") {
       word = animals[Math.floor(Math.random() * animals.length)]
    }
    else if (getGenre ==='fruits'){
       word = fruits[Math.floor(Math.random() * fruits.length)]
    }
    else{
       word = things[Math.floor(Math.random() * things.length)]
    } 

    dispatch(setCorrectWord(word))
    dispatch(setInitialGuess(word))
    
    setTimeout(() => {
      router.push('/game')
    }, 500);
  }

   useEffect(()=>{

      const clearAll = async () => {
        await persistor.purge();
        dispatch(setInitialState());
        dispatch(setInitialState1());
      };
    clearAll()
   },[])
  
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-green-200 p-4 font-sans">
      
      {/* Main container for the UI kit */}
      <div className="relative bg-yellow-100 bg-opacity-80 rounded-2xl shadow-xl p-6 w-full max-w-sm border-4 border-yellow-200">
        {/* Top banner with "Game UI kit" title */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-90 bg-pink-500 rounded-lg shadow-lg py-2 px-4 flex items-center justify-center border-b-4 border-pink-700">
          <h1 className="font-sans font-family: Segoe UI text-white text-xl font-bold uppercase tracking-wide text-shadow-md">
            Select Genre
          </h1>
        </div>

        {/* Spacer for the banner */}
        <div className="pt-8"></div>

        {/* Buttons container */}
        <div className="space-y-4">
          {/* Play Button */}
          <button
            className="w-full py-3 px-4 rounded-xl text-white text-xl font-bold shadow-lg transform active:scale-95 transition-transform duration-150
                             bg-gradient-to-r from-yellow-400 to-yellow-600 border-b-4 border-yellow-800
                             hover:from-yellow-500 hover:to-yellow-700"
                             onClick={()=>{
                              selectWord("animals")
                             }}
          >
            Animals
          </button>

          {/* Settings Button */}
          <button
            className="w-full py-3 px-4 rounded-xl text-white text-xl font-bold shadow-lg transform active:scale-95 transition-transform duration-150
                             bg-gradient-to-r from-blue-500 to-purple-600 border-b-4 border-purple-800
                             hover:from-blue-600 hover:to-purple-700"
                             onClick={()=>{
                              selectWord("fruits")
                             }}
          >
            Fruits
          </button>

          {/* Shop Button */}
          <button
            className="w-full py-3 px-4 rounded-xl text-white text-xl font-bold shadow-lg transform active:scale-95 transition-transform duration-150
                             bg-gradient-to-r from-lime-500 to-green-600 border-b-4 border-green-800
                             hover:from-lime-600 hover:to-green-700"
                             onClick={()=>{
                              selectWord("things")
                             }}
          >
            Things
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
