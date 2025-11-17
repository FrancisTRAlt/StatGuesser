import React, { useState } from "react";
import LetterBlock from "../components/LetterBlock";

const GuessAttempt = ({ letters, reveal }) => {
    
    return (<>
        <span style={{ display: "flex" }}>
            {
                letters.map((letter, index) =>
                    <LetterBlock key={index} Letter={letter} reveal={reveal} />
                )
            }
        </span>
    </>)
};

export default GuessAttempt;