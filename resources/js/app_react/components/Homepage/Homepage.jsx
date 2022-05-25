import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

const Homepage = () => {
    return(
        <div className="App d-flex w-100">
            <Sidebar/>
            <Main/>
        </div>
    )
}
export default Homepage;
