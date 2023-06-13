import React from "react";

const RecieveProps = ({ title, description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default RecieveProps;