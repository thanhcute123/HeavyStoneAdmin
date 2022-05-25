import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signin_login from '../../img/1.png';
import signin_text from '../../img/2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Signin.css";


const Signin = () => {
    let admin_login = sessionStorage.getItem('admin_login');
    let navigate = useNavigate();
    const [formSignin, setFormSignin] = useState({
            email: "",
            password: ""
    });
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(1);

    const  updateField = (e, key) => {
        formSignin[key] = e.target.value;
        setFormSignin({...formSignin});
        console.log(formSignin);
    }

    const setSt = () => {
      setStatus(2);
    }

    const  adminSignin = () => {

            const dataSigin = formSignin;
            console.log("dataSigin---", formSignin);
            // let id = formDataPostUpdate.id
             axios.post(`http://127.0.0.1:8000/api/admin/login`,{
                email: formSignin.email,
                password: formSignin.password,
                // postData
            })

                .then(res => {
                    let user;
                    console.log("res----", res)

                    // localStorage.setItem("users",res.data.data);
                    // user = res.data.data.id_user;

                    sessionStorage.setItem("admin_login", JSON.stringify(res.data.data));

                    const resetForm = {
                        theme: "",
                        content: ""
                    }
                    const resetError = []

                    setFormSignin(resetForm);
                    setErrors(resetError);
                    sessionStorage.removeItem('errors')
                    console.log("thenError---", errors);

                })
                .catch(function (error) {
                    return new Promise((done) => {
                        if (error.response) {
                            console.log("errrro---", error.response.data.error);
                            setErrors(error.response.data.error);
                            if(done)
                                done(errors)
                            console.log("thenError---", errors);

                        } else if (error.request) {

                            console.log(error.request);
                        } else {

                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    })


                })
    }







    const handleSubmit = (e) => {
        e.preventDefault();
        adminSignin()
        navigate('/');
        window.location.reload();





    }
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
                                <label className="form-label">Email</label>
                                <input value={formSignin.email} type="text" className="form-control" id="username" onChange={(e) => {
                                    updateField(e, 'email')
                                }}/>
                                {errors.email && <div className="error-msg">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input value={formSignin.password} type="password" className="form-control" id="password" onChange={(e) => {
                                    updateField(e, 'password')
                                }}/>
                                {errors.password && <div className="error-msg">{errors.password}</div>}
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="check"/>
                                <label className="form-check-label">Remember me!</label>
                            </div>


                            <button type="submit" className="signin-button rounded-3" onClick={(e) => {
                                handleSubmit(e);
                            }}>Zô</button>

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
