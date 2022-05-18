import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import UsersTable from "./UsersTable/UsersTable";
import Posts from "./Posts/Posts";
import Club from "./Club/Club";
import "../Main/Main.css";
import { Route, Routes } from "react-router-dom";
import UrgentNotice from "./UrgentNotice/UrgentNotice";


const Main = () => {
    return(
        <div className="w-100 main">
            <Header/>
            <Routes>
                <Route path="/" element={<Content/>}/>
            </Routes>
            <Routes>
                <Route path="/users" element={<UsersTable/>}/>
            </Routes>
            <Routes>
                <Route path="/pending" element={<Posts/>}/>
            </Routes>
            <Routes>
                <Route path="/clb" element={<Club/>}/>
            </Routes>
            <Routes>
                <Route path="/urgent_notice" element={<UrgentNotice/>}/>
            </Routes>
        </div>
    )

}
export default Main;