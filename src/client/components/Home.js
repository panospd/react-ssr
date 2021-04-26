import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>I'm the best best home component</div>
            <button onClick={() => console.log("Hi there!")}>Press me</button>
        </div>
    );
};

export default Home;
