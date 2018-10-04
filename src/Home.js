import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <div>
        <h1> Just a home </h1>
        <Link to='/app1'> App 1 </Link>
        <Link to='/app2'> App 2 </Link>
    </div>
)

export default Home