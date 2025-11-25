import React, { useState, useEffect } from "react";
import StatModifier from "./StatModifiers";

const StatUI = ({ currentWordDesc }) => {
    const [wordDescription, setWordDescription] = useState("");
    useEffect(() => { //Testing purposes
        setWordDescription(currentWordDesc);
    }, [currentWordDesc]);

    const flattingDictionary = (list) => {
        if (!list) return ''; // or return a fallback string
        return Object.entries(list)
            .map(([key, value]) => `${key} ${value}`)
            .join(', ');
    };

    const getAC = () => {
        if(!wordDescription?.armor_class) return "Unknown";
        return wordDescription?.armor_class[0].value;
    }

    useEffect(() => {
        // console.log(wordDescription?.armor_class, " dfsdfsdf");
    }, [wordDescription]);


    return (<section className="mt-[2em]">
        <div className="grid grid-cols-2">
            <div>
                <h2>Name: {wordDescription?.name ?? "Unknown"}</h2>
                <h2>Type: {wordDescription?.type ?? "Unknown"}</h2>
                <h2>---Stats---</h2>
                <p>AC: {getAC()}</p>
                <p>HP: {wordDescription?.hit_points ?? "Unknown"}</p>
                <p>Speed: {flattingDictionary(wordDescription?.speed) ?? "Unknown"}</p>

                <StatModifier
                    strength={wordDescription?.strength ?? "Unknown"}
                    dexterity={wordDescription?.dexterity ?? "Unknown"}
                    constitution={wordDescription?.constitution ?? "Unknown"}
                    intelligence={wordDescription?.intelligence ?? "Unknown"}
                    wisdom={wordDescription?.wisdom ?? "Unknown"}
                    charisma={wordDescription?.charisma ?? "Unknown"}
                />

                <h2>---Proficiencies---</h2>
                skills
                senses
                languages
                cr
            </div>
            <div>
                <h2>Traits</h2>
                desc
                <h2>Actions</h2>
                abilities
            </div>
        </div>
    </section>);
};

export default StatUI;