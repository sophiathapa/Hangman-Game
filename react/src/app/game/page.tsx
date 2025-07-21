"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setImage,
  setIndex,
  setColor,
  setGuessWord,
  setInitialState,
} from "@/features/game/gameSlice";
import { useRouter } from "next/navigation";
import { persistor } from "../store";
import { setInitialState1 } from "@/features/genre/genreSlice";

const keyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const Game = () => {
  const { correctWord, initialGuess } = useSelector((state) => state.genre);
  const { image, index, guessWord } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleGuess = (val) => {
    const isIncluded = correctWord.includes(val);
    if (isIncluded) {
      const matchedIndex = correctWord
        .split("")
        .map((item, id) => {
          if (item == val) return id;
        })
        .filter((item) => item || item == 0);

      dispatch(setIndex([...index, ...matchedIndex]));
    } else {
      dispatch(setImage());
      dispatch(setColor("bg-gray-500"));
    }
    console.log(index);
  };

  useEffect(() => {
    const word = correctWord
      ?.split("")
      .map((val, id) => (index.includes(id) ? correctWord[id] : "_"))
      .join("");

    dispatch(setGuessWord(word));
  }, [index, correctWord, dispatch]);

  const navigateToHomePage = () => {
    // setTimeout(()=>{
    //   router.push("/");
    // },100)
    router.push("/");
  };

  const clearAll = async () => {
    await persistor.purge();
    dispatch(setInitialState());
    dispatch(setInitialState1());
  };

  return (
    <div className="min-h-screen flex  items-center justify-center bg-gradient-to-br from-blue-300 to-green-200">
      <div className="flex  ">
        <div className="w-80 h-80">
        <img src={`hang_${image}.gif`} alt="hangman" />
        </div>
      <div className=" flex  flex-col">
        <div className="flex gap-3 justify-center text-2xl">
          {guessWord?.split("").map((val,id) => {
            return (
              <div key={id} className="">
                {val}
              </div>
            );
          })}
        </div>
        <div className="mt-15 text-xl">
          {image < 7 && correctWord?.length !== index.length ? 
          (
            keyboard.map((val, id) => {
              return (
                <div key={id} className="flex justify-center item-center">
                  {val.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`p-2 m-2 bg-black text-white`}
                        onClick={() => {
                          handleGuess(item.toLowerCase());
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              );
            })
          ) : (guessWord.toLowerCase() === correctWord.toLowerCase() &&
             correctWord !== '' )? (
            <>
              <div className="flex justify-center text-green-600">
                YOU WON !!! 🥳🎉🙌
              </div>
              <button
                onClick={() => {
                  clearAll();
                  navigateToHomePage();
                }}
              >
                New Game
              </button>
            </>
          ) : guessWord !== correctWord && image === 7 ? (
            <>
              <div className="flex justify-center text-red-500">
                YOU LOST !!!👎😢🤧
              </div>
              <button
                onClick={() => {
                  clearAll();
                  navigateToHomePage();
                }}
              >
                New Game
              </button>
            </>
          ) : null}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Game;
