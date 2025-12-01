import React, { useEffect, useState } from "react";
import GuessingUI from "../components/GuessingComponents/GuessingUI";
import StatUI from "../components/StatComponents/StatUI";
import useMonster from "../hooks/useMonster";
import ListOfMonsters from "../components/ListOfMonsters";
import Popup from "../components/Popup";

const Home = () => {
    const { loading, currentWord, resetKit, currentWordDetails, listOfMonsters, maxLength } = useMonster();
    const [hasWon, setHasWon] = useState(false);
    const [hasLost, setHasLost] = useState(false);
    const [attemptCount, setAttemptCount] = useState(0);

    const [maxGuesses, setMaxGuesses] = useState(6);
    const [isOpen, setIsOpen] = useState(true);
    const [playAgain, setPlayAgain] = useState(false);

    if (loading) {
        return <p>Loading...</p>; // Wait until API is ready
    }

    // If you win or lose, show the popup
    if (isOpen && (hasWon || hasLost)) {
        document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
        document.body.style.overflow = "auto"; // Restore scrolling
    }
    
    if (playAgain) {
        const timer = setTimeout(() => {
            setHasWon(false);
            setHasLost(false);
            setAttemptCount(0);
            setMaxGuesses(6);
            setIsOpen(true);
            setPlayAgain(false); // Reset flag after handling
        }, 500); // Delay in milliseconds (e.g., 500ms)

        // Cleanup to avoid memory leaks
        return () => clearTimeout(timer);
    }


    return (
        <div>
            {(hasWon || hasLost) &&
                <div>
                    {/* Popup component */}
                    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}
                        onPlayAgain={() => { setPlayAgain(true); resetKit.randomize(resetKit.data); setIsOpen(false) }}
                        className="
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            bg-white border rounded-lg shadow-lg p-6 w-80 bg-white
                        ">
                        <h2 className="text-xl font-bold">Game Over</h2>
                        {hasWon && <div>You have won!</div>}
                        {hasLost && <div>You have lost :(</div>}
                        <p>The word is: {currentWordDetails.name}</p>
                    </Popup>
                </div>
            }

            <div className="flex justify-center">
                <GuessingUI currentWord={currentWord}
                    listOfMonsters={listOfMonsters} maxLength={maxLength}
                    setHasWon={setHasWon}
                    setHasLost={setHasLost}
                    setAttemptCount={setAttemptCount}
                    maxGuesses={maxGuesses}
                    playAgain={playAgain}
                />
            </div>
            <div className="flex justify-center">
                <StatUI
                    currentWordDetails={currentWordDetails}
                    reveal={hasWon || hasLost}
                    attemptCount={attemptCount}
                    maxGuesses={maxGuesses}
                    playAgain={playAgain}
                />
            </div>
            <ListOfMonsters list={listOfMonsters} />
        </div>);
};

export default Home;