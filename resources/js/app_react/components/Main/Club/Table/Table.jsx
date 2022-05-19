import React ,{useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSearch, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {Modal} from "react-bootstrap";
import "./Table.css";
import axios from "axios";

const Table = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataClb, setDataClb ] = useState([]);
    const [idClb, setIdClb] = useState();
    const [formDataClbUpdate, setFormDataClbUpdate] = useState([]);
    const [formDataClb, setFormDataClb] = useState({
        club_code: "",
        club_name:"",
        id_user:"",
        president:"",
        class:"",
        email:"",
        phone:""
    });

    const set_idClb = (type) => {
        setIdClb(type);
        console.log("idclb---", idClb);
    }
    const  updateField = (e, key) => {
        formDataClb[key] = e.target.value;
        setFormDataClb({...formDataClb});
        console.log(formDataClb);
    }

    const  updateFieldClbUpdate = (e, key) => {
        formDataClbUpdate[key] = e.target.value;
        setFormDataClbUpdate({...formDataClbUpdate});
        console.log("formClbUpdate---", formDataClbUpdate);
    }

    const formClbUpdate = (data) => {
        setFormDataClbUpdate(data)
        console.log("aaa-", formDataClbUpdate);
    }

    const getDataClbApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/club/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCLb----", result);
                    setIsLoaded(true);
                    setDataClb(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const doInsertClb = () => {
        const clbData = formDataClb;
        console.log("clbData---", formDataClb);

        axios.post("http://127.0.0.1:8000/api/club/create",{
            club_code: formDataClb.club_code,
            club_name: formDataClb.club_name,
            id_user: formDataClb.id_user,
            president: formDataClb.president,
            class: formDataClb.class,
            email: formDataClb.email,
            phone: formDataClb.phone
            // postData
        })
            .then(res => {
                const resetModal = {
                    club_code: "",
                    club_name:"",
                    id_user:"",
                    president:"",
                    class:"",
                    email:"",
                    phone:""
                }

                setFormDataClb(resetModal);
                getDataClbApi()
            })

    }

    const doUpdateClb = () => {
        const clbData = formDataClbUpdate;
        console.log("clbData---", formDataClbUpdate);

        axios.put(`http://127.0.0.1:8000/api/club/update/${idClb}`,{
            club_code: formDataClbUpdate.club_code,
            club_name: formDataClbUpdate.club_name,
            id_user: formDataClbUpdate.id_user,
            president: formDataClbUpdate.president,
            class: formDataClbUpdate.class,
            email: formDataClbUpdate.email,
            phone: formDataClbUpdate.phone
            // postData
        })
            .then(res => {
                getDataClbApi()
            })


    }
    const doDeleteClb = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/club/delete/${id}`,{

            // postData
        })
            .then(res => {
                alert("Xác nhận xóa mục đã chọn")
                getDataClbApi()
            })


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(idClb != undefined) {
            doUpdateClb();
        }else {
            doInsertClb();
        }

    }

    useEffect(() => {
        getDataClbApi();

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div>
                <form
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
                                <div className="uppost-title">Add User</div>
                            </Modal.Title>
                        </Modal.Header>
                        <div className="d-flex justify-content-around">
                            <div className="w-100 border-end">

                                <Modal.Body>

                                    <div className="w-100">
                                        {idClb === undefined ?
                                            <div>
                                                <div className="form-group">
                                                    <label>Code</label>
                                                    <input type="text" className="form-control title" value={formDataClb.club_code}   onChange={(e) => {
                                                        updateField(e,'club_code')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control title" value={formDataClb.club_name}   onChange={(e) => {
                                                        updateField(e, 'club_name')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>President</label>
                                                    <input type="text" className="form-control title" value={formDataClb.president}  onChange={(e) => {
                                                        updateField(e, 'president')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>ID of president</label>
                                                    <input type="text" className="form-control title" value={formDataClb.id_user}   onChange={(e) => {
                                                        updateField(e, 'id_user')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Class</label>
                                                    <input type="text" className="form-control title" value={formDataClb.class}   onChange={(e) => {
                                                        updateField(e, 'class')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control title" value={formDataClb.email}   onChange={(e) => {
                                                        updateField(e, 'email')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control title" value={formDataClb.phone}   onChange={(e) => {
                                                        updateField(e, 'phone')
                                                    }}/>
                                                </div>

                                            </div> :
                                            <div>
                                                <div className="form-group">
                                                    <label>Code</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.club_code}   onChange={(e) => {
                                                        updateFieldClbUpdate(e,'club_code');
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.club_name}   onChange={(e) => {
                                                        updateFieldClbUpdate(e,'club_name');
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>President</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.president}   onChange={(e) => {
                                                        updateFieldClbUpdate(e,'president');
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>ID of president</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.id_user}   onChange={(e) => {
                                                        updateFieldClbUpdate(e,'id_user');
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Class</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.class}   onChange={(e) => {
                                                        updateFieldClbUpdate(e,'class')
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.email}  onChange={(e) => {
                                                        updateFieldClbUpdate(e,'email');
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control title" value={formDataClbUpdate.phone}   onChange={(e) => {
                                                        updateFieldClbUpdate(e,'phone');
                                                    }}/>
                                                </div>

                                            </div>
                                        }


                                    </div>

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
                        <div className="table-add">
                            <button className="button-add" onClick={() => {
                                set_idClb(undefined)
                                handleShow()
                            }}>+ Add</button>
                        </div>
                        <div className="table-search">
                            <input placeholder="Search" size="40" type="text" />
                            <FontAwesomeIcon className="mr-2" icon={faSearch} />
                        </div>
                        <div className="table-responsive">

                            <table className="table table-striped list" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Code</th>
                                    <th className="col-2">Name</th>
                                    <th className="col-4">President</th>
                                    <th className="col-1">Class</th>
                                    <th className="col-1">Phone</th>
                                    <th className="col-2">Email</th>
                                    <th className="col-2">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    dataClb.map((clb, idx) => (
                                        <tr key={idx}>
                                            <td>{idx+1}</td>
                                            <td>{clb.club_code}</td>
                                            <td>{clb.club_name}</td>
                                            <td>{clb.president}</td>
                                            <td>{clb.class}</td>
                                            <td>{clb.phone}</td>
                                            <td>{clb.email}</td>

                                            <td>

                                                <button
                                                    className="btn btn-primary btn-sm mr-1" onClick={() => {
                                                    set_idClb(clb.id);
                                                    formClbUpdate(clb);
                                                    handleShow()
                                                }}>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </button>
                                                <button className="btn btn-danger btn-sm del-post-list"
                                                        data-id="" onClick={() => {
                                                        doDeleteClb(clb.id)
                                                }}>
                                                    <FontAwesomeIcon icon={faTrashAlt}/>
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
