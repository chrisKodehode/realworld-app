import React from "react";
import {dataArray} from "../data/index";



const DisplayArray = () => {
    return (
        <div>
            {dataArray.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default DisplayArray;