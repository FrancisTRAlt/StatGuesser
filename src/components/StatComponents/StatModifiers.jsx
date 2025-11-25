import React from "react";

const StatModifiers = ({ strength, dexterity, constitution, intelligence, wisdom, charisma }) => {

    const tdStyle = "px-2";
    const topStyle = "bg-green-300";
    const buttomStyle = "bg-blue-300";

    return (<>
        <table className="table-auto border-separate border-spacing-x-2">
            <tbody>
                <tr>
                    <td className={`${tdStyle} ${topStyle}`}><span style={{marginRight: "10px"}}>STR:</span> {strength}</td>
                    <td className={`${tdStyle} ${topStyle}`}><span style={{marginRight: "10px"}}>DEX:</span> {dexterity}</td>
                    <td className={`${tdStyle} ${topStyle}`}><span style={{marginRight: "10px"}}>CON:</span> {constitution}</td>
                </tr>
                <tr>
                    <td className={`${tdStyle} ${buttomStyle}`}><span style={{marginRight: "10px"}}>INT:</span> {intelligence}</td>
                    <td className={`${tdStyle} ${buttomStyle}`}><span style={{marginRight: "10px"}}>WIS:</span> {wisdom}</td>
                    <td className={`${tdStyle} ${buttomStyle}`}><span style={{marginRight: "10px"}}>CHA:</span> {charisma}</td>
                </tr>
            </tbody>
        </table>
    </>);
};

export default StatModifiers;