import React, { useState } from "react";

const LetterBlock = ({Letter, reveal}) => {

    const letterStyle = reveal ? {backgroundColor: "green"}: null;

    return(<>
        <div className="letterbox" style={letterStyle}>{Letter}</div>
    </>)
};

export default LetterBlock;