import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSearch, faTrashAlt, faRefresh} from '@fortawesome/free-solid-svg-icons'
import "./Table.css";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";


const Table = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const set_id = (type) => {
      setId(type);
      console.log("id---", id);
    }


    const getDataAccountsApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/account/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("account----", result);
                    setIsLoaded(true);
                    setAccounts(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }


    const doResetPassword = () => {

        axios.get(`http://127.0.0.1:8000/api/account/resetPassword/${id}`,{

        })
            .then(res => {
                getDataAccountsApi()
            })


    }

    const handleSubmit = (event) => {
      event.preventDefault();
      doResetPassword();

    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        getDataAccountsApi();

    }, [])




    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            // <form onSubmit={(e) => {handleSubmit(e)}}>
            //     <input type="text"/>
            //     <button type="submit">add</button>
            // </form>
            <div className="w-100">

                <form className=""
                      onSubmit={(ev) => {
                          handleSubmit(ev);
                      }}
                >
                    <Modal show={show} onHide={handleClose}
                           aria-labelledby="contained-modal-title-vcenter"
                           centered
                    >
                        <Modal.Header>
                            <Modal.Title>
                                <div className="uppost-title">Reset Password</div>
                            </Modal.Title>
                        </Modal.Header>
                        <div className="d-flex justify-content-around">
                            <div className="w-100 border-end ">

                                <Modal.Body>
                                    <div className="alert alert-warning d-flex align-items-center" role="alert">Thực hiện thao tác reset lại mật khẩu mặc định đối với tài khoản của người dùng</div>

                                </Modal.Body>
                                <Modal.Footer>
                                    <div>
                                        <button type="button" className="btn btn-secondary"  data-dismiss="modal" onClick={handleClose}>Hủy bỏ</button>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary" onClick={(e) => {handleSubmit(e); handleClose()}}>Ghi lại</button>
                                    </div>
                                </Modal.Footer>
                            </div>


                        </div>


                    </Modal>
                </form>

                <div className="card shadow mb-4 card-table">
                    <div className="card-body">

                        <div className="table-search">
                            <input placeholder="Search" size="40" type="text" />
                            <FontAwesomeIcon className="mr-2" icon={faSearch} />
                        </div>
                        <div className="table-responsive">

                            <table className="table table-striped list" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>ID</th>
                                    <th>email</th>
                                    <th>role</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    accounts.map((account, idx) => (
                                        <tr key={idx}>
                                            <td>{idx+1}</td>
                                            <td>{account.id_user}</td>
                                            <td>{account.email}</td>
                                            {account.role === 1 ?
                                                <td>

                                                    <div
                                                        className="badge bg-warning text-dark mr-1">
                                                        Quản trị viên
                                                    </div>
                                                </td> : <td>

                                                    <div
                                                        className="badge bg-light text-dark mr-1">
                                                        Người dùng
                                                    </div>
                                                </td>
                                            }
                                            <td>

                                                <button
                                                   className="btn btn-primary btn-sm mr-1" onClick={() => {
                                                       set_id(account.id);
                                                       handleShow()
                                                }}>
                                                    <FontAwesomeIcon icon={faRefresh}/>
                                                </button>
                                            </td>

                                        </tr>
                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>

        )
    }



}
export default Table;
