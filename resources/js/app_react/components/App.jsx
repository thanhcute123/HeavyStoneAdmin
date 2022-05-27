import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Signin from "./Signin/Signin";
import Homepage from "./Homepage/Homepage";
import Content from "./Main/Content/Content";
import UsersTable from "./Main/UsersTable/UsersTable";
import Posts from "./Main/Posts/Posts";
import Club from "./Main/Club/Club";
import UrgentNotice from "./Main/UrgentNotice/UrgentNotice";
import Post from "./Main/Posts/Post/Post";
import Faculty from "./Main/Posts/Faculty/Faculty";
import AccountsTable from "./Main/AccountsTable/AccountsTable";



function App( props ){
    let admin_login = sessionStorage.getItem('admin_login')
    return (
        <div >
            <Routes>
                {!admin_login ?
                <Route path="/signin" element={<Signin/>}/> :
                <Route path="/" element={<Homepage/>}>
                        <Route path="" element={<Content/>}/>
                        <Route path="accounts" element={<AccountsTable/>}/>
                        <Route path="users" element={<UsersTable/>}/>
                        <Route path="faculty" element={<Faculty/>}/>
                        <Route path="posts" element={<Post/>}/>
                        <Route path="clb" element={<Club/>}/>
                        <Route path="urgent_notice" element={<UrgentNotice/>}/>
                </Route>}
            </Routes>
        </div>
    )
}

export default App
