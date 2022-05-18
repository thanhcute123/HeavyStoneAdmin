import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSearch, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
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
    const [items, setItems] = useState([]);
    const [faculty, setFaculty] = useState([]);
    const [formDataUser, setFormDataUser] = useState({
        id_user: "",
        username:"",
        sex:"",
        phone:"",
        id_department:""
    });
    const [formDataUserUpdate, setFormDataUserUpdate] = useState()



    const set_id = (type) => {
      setId(type);
      console.log("id---", id);
    }


    const  updateField = (e, key) => {
        formDataUser[key] = e.target.value;
        setFormDataUser({...formDataUser});
        console.log(formDataUser);
    }
    const  updateFieldUpdate = (e, key) => {
        formDataUserUpdate[key] = e.target.value;
        setFormDataUserUpdate({...formDataUserUpdate});
        console.log("bbbb---", formDataUserUpdate);
    }

    const getDataUserApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datauser----", result);
                    setIsLoaded(true);
                    setItems(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const getDataFaculty = () => {
        axios.get("http://127.0.0.1:8000/api/department/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("faculty----", result);
                    setIsLoaded(true);
                    setFaculty(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const formUpdate = (data) => {
      setFormDataUserUpdate(data)
        // console.log("aaa-", formDataUserUpdate);
    }

    const doInsertUser = () => {
        const postData = formDataUser;
        console.log("postData---", formDataUser);

        axios.post("http://127.0.0.1:8000/api/user/create",{
            id_user: formDataUser.id_user,
            username: formDataUser.username,
            sex: formDataUser.sex,
            phone: formDataUser.phone,
            id_department: formDataUser.id_department
            // postData
        })
            .then(res => {
                const resetModal = {
                    id_user: "",
                    username:"",
                    sex:"",
                    phone:"",
                    id_department:""
                }

                setFormDataUser(resetModal);
                getDataUserApi()
            })

    }
    const doUpdatetUser = () => {
        const postData = formDataUserUpdate;
        console.log("postData---", formDataUserUpdate);

        axios.put(`http://127.0.0.1:8000/api/user/update/${id}`,{
            id_user: formDataUserUpdate.id_user,
            username: formDataUserUpdate.username,
            sex: formDataUserUpdate.sex,
            phone: formDataUserUpdate.phone,
            id_department: formDataUserUpdate.id_department
            // postData
        })
            .then(res => {
                getDataUserApi()
            })


    }
    const doDeleteUser = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`,{

            // postData
        })
            .then(res => {
                alert("Xác nhận xóa mục đã chọn")
                getDataUserApi()
            })


    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(id != undefined) {
          doUpdatetUser();
      }else {
          doInsertUser();

      }

    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        getDataUserApi();
        getDataFaculty();
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
                                        {id == undefined ? <div>
                                                <div className="form-group">
                                                    <label>Id</label>
                                                    <input type="text" className="form-control title" value={formDataUser.id_user}  onChange={(e) => {
                                                        updateField(e, "id_user")
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control title" value={formDataUser.username} onChange={(e) => {
                                                        updateField(e, "username")
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Gender</label>
                                                    <div className="d-flex">
                                                        <div className="form-check m-3">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                                   id="flexRadioDefault1" value={0} onChange={(e) => {
                                                                updateField(e, "sex")
                                                            }}/>
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Male
                                                            </label>
                                                        </div>
                                                        <div className="form-check m-3">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                                   id="flexRadioDefault2" value={1} onChange={(e) => {
                                                                updateField(e, "sex")
                                                            }}/>
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Female
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control title" value={formDataUser.phone} onChange={(e) => {
                                                        updateField(e, "phone")
                                                    }}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Faculty</label>
                                                    {/*<input type="text" className="form-control title" value={formDataUser.id_department} onChange={(e) => {*/}
                                                    {/*    updateField(e, "id_department")*/}
                                                    {/*}}/>*/}
                                                    <select value={formDataUser.id_department} className="form-control" aria-label="Default select example" onChange={(e) => {
                                                        updateField(e, "id_department")
                                                    }}>
                                                        <option selected>Chọn Khoa</option>
                                                        {faculty.map(faculty => (
                                                            <option value={faculty.id_department}>{faculty.name_department}</option>
                                                        ))}


                                                    </select>
                                                </div>



                                            </div> :

                                            <div>
                                                    <div className="form-group">
                                                        <label>Id</label>
                                                        <input type="text" className="form-control title" value={formDataUserUpdate.id_user} onChange={(e) => {
                                                           updateFieldUpdate(e,"id_user")

                                                        }}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control title" value={formDataUserUpdate.username} onChange={(e) => {
                                                            updateFieldUpdate(e, "username")
                                                        }}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Gender</label>
                                                        {formDataUserUpdate.sex === 0 ?
                                                            <div className="d-flex">
                                                                <div className="form-check m-3">
                                                                    <input className="form-check-input" type="radio"
                                                                           name="flexRadioDefault"
                                                                           id="flexRadioDefault1" checked value={0} onChange={(e) => {
                                                                        updateField(e, "sex")
                                                                    }}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault1">
                                                                        Male
                                                                    </label>
                                                                </div>
                                                                <div className="form-check m-3">
                                                                    <input className="form-check-input" type="radio"
                                                                           name="flexRadioDefault"
                                                                           id="flexRadioDefault2" value={1} onChange={(e) => {
                                                                        updateField(e, "sex")
                                                                    }}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Female
                                                                    </label>
                                                                </div>
                                                            </div> :
                                                            <div className="d-flex">
                                                                <div className="form-check m-3">
                                                                    <input className="form-check-input" type="radio"
                                                                           name="flexRadioDefault"
                                                                           id="flexRadioDefault1" value={0} onChange={(e) => {
                                                                        updateFieldUpdate(e, "sex")
                                                                    }}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault1">
                                                                        Male
                                                                    </label>
                                                                </div>
                                                                <div className="form-check m-3">
                                                                    <input className="form-check-input" type="radio"
                                                                           name="flexRadioDefault"
                                                                           id="flexRadioDefault2"  checked value={1} onChange={(e) => {
                                                                        updateFieldUpdate(e, "sex")
                                                                    }}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Female
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        }

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control title" value={formDataUserUpdate.phone} onChange={(e) => {
                                                            updateFieldUpdate(e, "phone")
                                                        }}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Faculty</label>
                                                        {/*<input type="text" className="form-control title" value={formDataUserUpdate.id_department} onChange={(e) => {*/}
                                                        {/*    updateFieldUpdate(e, "id_department")*/}
                                                        {/*}}/>*/}
                                                        <select value={formDataUserUpdate.id_department} className="form-control" aria-label="Default select example" onChange={(e) => {
                                                            updateFieldUpdate(e, "id_department")
                                                        }}>
                                                            <option selected>Chọn Khoa</option>
                                                            {faculty.map(faculty => (
                                                                <option value={faculty.id_department}>{faculty.name_department}</option>
                                                            ))}


                                                        </select>
                                                    </div>


                                                </div>


                                        }




                                    </div>

                                </Modal.Body>
                                <Modal.Footer>
                                    {/*<Button className="btn-secondary" onClick={handleClose}>Hủy</Button>*/}
                                    {/*<Button type="submit" className=" button-uppost" onClick={handleClose}>*/}
                                    {/*    Add*/}
                                    {/*</Button>*/}
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
                                set_id(undefined);
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
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Faculty</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    items.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>{idx+1}</td>
                                            <td>{item.id_user}</td>
                                            <td>{item.username}</td>
                                            {faculty.map((faculty,idx) => (
                                                faculty.id_department === item.id_department &&
                                                <td key={idx}>{faculty.name_department}</td>
                                            ))
                                            }


                                            <td>

                                                <button
                                                   className="btn btn-primary btn-sm mr-1" onClick={() => {
                                                       set_id(item.id);
                                                       formUpdate(item);
                                                       handleShow()
                                                }}>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </button>
                                                <button className="btn btn-danger btn-sm del-post-list"
                                                   data-id="" onClick={() => {
                                                    doDeleteUser(item.id)
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
