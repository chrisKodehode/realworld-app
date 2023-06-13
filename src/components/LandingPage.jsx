import React from "react";
import RecieveProps from "./RecieveProps";
import Children from "./Children";
import DisplayArray from "./DisplayArray";

const LandingPage = () => {
    return (
        <div>
            <h1>Hello there</h1>
            <RecieveProps title="This is a title" description="This is a description" />
            <Children>
                <h3>These are the children properties</h3>
            </Children>
            <DisplayArray />
        </div>
    );
};

export default LandingPage;