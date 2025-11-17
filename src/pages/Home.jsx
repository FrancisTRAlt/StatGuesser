import React, { useState, useEffect } from "react";
import GuessAttempt from "../components/GuessAttempt";

const Home = () => {
    const [reveal, setReveal] = useState(false);

    const [letters, setLetters] = useState([]);

    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        const keyPressEvent = (e) => {
            const isLetter = /^[A-Za-z]$/.test(e.key);
            // console.log("Key pressed:", e.key, isLetter);
            if (isLetter) {
                setLetters(letters => [...letters, e.key]);
            }
            if (e.key === "Backspace") {
                setLetters(letters => letters.slice(0, -1));
            }
            if (e.key === "Enter" && letters.length > 0) {
                setReveal(true);
                setAttempts(attempt => [...attempt, letters]);
                setLetters([]);
            }
        };

        window.addEventListener("keydown", keyPressEvent);

        return () => {
            window.removeEventListener("keydown", keyPressEvent);
        };
    }, [letters]);

    useEffect(() => {
        // console.log(letters);
        
    }, [letters]);

    useEffect(() => {
        console.log("test", attempts);
        
    }, [attempts]);

    return (
        <div>
            <button onClick={() => { setReveal(!reveal) }}>Reveal</button>
            {
                attempts.map((attempt, index) =>
                    <GuessAttempt key={index} letters={attempt} reveal={reveal} />
                )
            }
            <GuessAttempt letters={letters} reveal={false}/>
        </div>
    );
};

export default Home;