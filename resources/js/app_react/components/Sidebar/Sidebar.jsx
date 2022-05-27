import React from "react";
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink, faTachometerAlt, faUsers, faPager, faHeart, faFireAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import "../../css/sb-admin-2.css";
import logo from "../../img/Logo.png";
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar-fixed">
            <div id="wrapper">
                <ul className="d-flex align-items-center navbar-nav sidebar-custom sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                        <div className="sidebar-brand-icon sidebar-icon rotate-n-15">
                            {/*<FontAwesomeIcon icon={faLaughWink}/>*/}
                            <Icon icon="fa:optin-monster" />
                        </div>
                        <div className="sidebar-brand-text mx-3">Heavystone Admin</div>
                    </a>
                    <li className="nav-item active">
                        <NavLink to="" className="nav-link">
                           <FontAwesomeIcon icon={faTachometerAlt}/>
                            <span className="item">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="accounts" className="nav-link">
                            <FontAwesomeIcon icon={faUser}/>
                            <span className="item">Account</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="users" className="nav-link">
                            <FontAwesomeIcon icon={faUsers}/>
                            <span className="item">User</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="faculty" className="nav-link">
                            <FontAwesomeIcon icon={faPager}/>
                            <span className="item">Posts</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="clb" className="nav-link">
                            <FontAwesomeIcon icon={faHeart}/>
                            <span className="item">CLB</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="urgent_notice" className="nav-link">
                            <FontAwesomeIcon icon={faFireAlt}/>
                            <span className="item">Urgent Notice</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-logo">
                        <img className="rounded" src={logo} width="120px"/>
                    </li>

                    <footer className="sticky-footer text-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Heavystone 2022</span>
                            </div>
                        </div>
                    </footer>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;
