import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Content from "./Content/Content";
import UsersTable from "./UsersTable/UsersTable";
import Posts from "./Posts/Posts";
import Club from "./Club/Club";
import "../Main/Main.css";
import UrgentNotice from "./UrgentNotice/UrgentNotice";


const Main = () => {
    return(
        <div className="w-100 main">
            <Header/>
            <Outlet/>
        </div>
    )

}
export default Main;
