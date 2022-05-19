import React, {useState} from "react";
import signin_login from '../../img/1.png';
import signin_text from '../../img/2.png';
import "./Signin.css";


const Signin = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-100 d-flex justify-content-center align-items-center signin">
            <div className="col-lg-7 d-flex justify-content-center align-items-center shadow-lg ms-auto me-auto p-5 bg">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <div className="signin-left col-lg-6 d-flex justify-content-center align-items-center flex-column">
                        <div className="signin-logo">
                            <img className="rounded-3" src={signin_login} width="125px" height="125px"/>
                        </div>
                        <div className="signin-text mt-3">
                            <img className="signin-img" src={signin_text}/>
                        </div>

                    </div>
                    <div className="signin-right col-lg-6 d-flex align-items-center justify-content-center flex-column">
                        <h2>Sign in</h2>
                        <form className="signin-form">
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" id="username"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="check"/>
                                <label className="form-check-label">Remember me!</label>
                            </div>
                            {/*<Link className="link" to="/heavystone">*/}
                                <button type="submit" className="signin-button rounded-3">Zô</button>
                            {/*</Link>*/}
                        </form>
                    </div>
                </div>
            </div>

            {/*<a id="calltrap-btn" className="b-calltrap-btn calltrap_offline hidden-phone visible-tablet"*/}
            {/*   href="tel:0936307069">*/}
            {/*    <div id="calltrap-ico"></div>*/}
            {/*</a>*/}


        </div>
)
}
export default Signin;
