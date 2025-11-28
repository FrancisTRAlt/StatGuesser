import React from "react";
import { Tooltip } from "@material-tailwind/react";
import CensorAnswer from "./HelperComponents/CensorAnswer";

const TraitsAndActions = ({ data, answer, censor }) => {

    const getCensoredDesciption = (desc) => {
        let wordsToCensor = answer.split(" ").map(w => w.toLowerCase());;
        let result = desc;
        for (let i = 0; i < wordsToCensor.length; i++) {
            const regex = new RegExp(wordsToCensor[i], "gi");
            result = result.replace(regex, "???");
        }
        return result;
    };

    const renderInfo = (info, index) => {

        const name = info?.name;
        const desc = info?.desc;

        return (
            <div key={index} className="space-x-2">
                <span className="font-[600]">{name}.</span>
                <CensorAnswer censor={censor} answer={answer} description={desc}/>
            </div>
        )
    };

    return (<>
        {data && data.length > 0 ? (
            data.map((info, index) => renderInfo(info, index))
        ) : (
            <span>N/A</span>
        )}
    </>);
};

export default TraitsAndActions;