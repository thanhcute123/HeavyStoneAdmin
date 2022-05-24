import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Dropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faEnvelope, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import avatar from "../../../img/undraw_profile.svg";
import "./HeaderStyle.css";

const Header = () => {
    let session = JSON.parse(sessionStorage.getItem('admin_login'));
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    let navigate = useNavigate();

    const getDataUserApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datauser----", result);
                    setIsLoaded(true);
                    setUsers(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const SignOut = () => {
        sessionStorage.removeItem('admin_login');
        navigate('signin');
        window.location.reload();
    }

    useEffect(() => {
        getDataUserApi();
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div className="w-100 header-fixed">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faBell}/>
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                </li>

                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {users.map((u, idx) => (
                                            u.id_user == session.id_user &&
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{u.username}</span>
                                        ))}

                                        <img className="img-profile rounded-circle"
                                             src={avatar} />
                                    </a>


                                </li>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropdownz mt-3" id="dropdown-basic">

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href=""><FontAwesomeIcon className="text-muted me-2" icon={faUser}/> Profile</Dropdown.Item>
                                        <Dropdown.Item href="" onClick={SignOut}><FontAwesomeIcon className="text-muted me-2" icon={faSignOut}/> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </ul>

                        </nav>
                    </div>
                </div>

            </div>
        )
    }



}
export default Header;
