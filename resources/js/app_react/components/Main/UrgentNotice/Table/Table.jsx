import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import "./Table.css";
import {Button, Modal} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";


const Table = () => {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataNoti, setDataNoti ] = useState([]);
    const [formDataNoti, setFormDataNoti] = useState({
        theme: "",
        content:""
    });

    const [formUpdateNoti, setFormUpdateNoti] = useState([]);
    const [id, setId] = useState();


    const set_id = (type) => {
        setId(type);
        console.log("id---", id);
    }

    const  updateField = (e, key) => {
        formDataNoti[key] = e.target.value;
        setFormDataNoti({...formDataNoti});
        console.log(formDataNoti);
    }

    const  updateFieldContent = (data, key) => {
        formDataNoti[key] = data;
        setFormDataNoti({...formDataNoti});
        console.log(formDataNoti);
    }

    const  updateFieldNotiUpdate = (e, key) => {
        formUpdateNoti[key] = e.target.value;
        setFormUpdateNoti({...formUpdateNoti});
        console.log("bbbb---", formUpdateNoti);
    }

    const  updateFieldNotiUpdateContent = (data, key) => {
        formUpdateNoti[key] = data;
        setFormUpdateNoti({...formUpdateNoti});
        console.log("bbbb---", formUpdateNoti);
    }

    const setFormUpdate = (data) => {
      setFormUpdateNoti(data);
    }

    const getDataNotiApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/notification/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCLb----", result);
                    setIsLoaded(true);
                    setDataNoti(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const doInsertNoti = () => {

            const notiData = formDataNoti;
            console.log("notiData---", formDataNoti);
            // let id = formDataPostUpdate.id
            axios.post(`http://127.0.0.1:8000/api/notification/create`,{

                theme: formDataNoti.theme,
                content: formDataNoti.content,
                // postData
            })
                .then(res => {
                    const resetModal = {
                        theme: "",
                        content: ""
                    }

                    setDataNoti(resetModal);
                    getDataNotiApi()
                })



    }

    const doUpdatetNoti = () => {
        const notiData = formUpdateNoti;
        console.log("postData---", formUpdateNoti);

        axios.put(`http://127.0.0.1:8000/api/notification/update/${id}`,{

            theme: formUpdateNoti.theme,
            content: formUpdateNoti.content
            // postData
        })
            .then(res => {
                getDataNotiApi()
            })


    }

    const doDeleteUser = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/notification/delete/${id}`,{

            // postData
        })
            .then(res => {
                alert("Xác nhận xóa mục đã chọn")
                getDataNotiApi()

            })


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(id != undefined) {
            doUpdatetNoti();
        }else {
            doInsertNoti();

        }

    }
    useEffect(() => {
        getDataNotiApi();

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div className="w-100">
                <form
                    onSubmit={(ev) => {
                        handleSubmit(ev);
                    }}
                >
                    <Modal show={show} onHide={handleClose}
                           size="xl"
                           aria-labelledby="contained-modal-title-vcenter"
                           centered
                    >
                        <Modal.Header>
                            <Modal.Title>
                                <div className="uppost-title">Thêm thông báo</div>
                            </Modal.Title>
                        </Modal.Header>
                        <div className="d-flex justify-content-around">
                            <div className="w-100 border-end">

                                <Modal.Body>

                                    <div className="w-100">
                                        {id == undefined ?
                                            <div>
                                                <div className="form-group">
                                                    <label>Tiêu đề thông báo</label>
                                                    <input value={formDataNoti.theme} type="text" className="form-control title" onChange={(e) => {
                                                        updateField(e, 'theme')
                                                    }}/>
                                                </div>

                                                <div className="form-group">
                                                    <label>Nội dung bài viết</label>
                                                    <CKEditor data={ formDataNoti.content }
                                                              onChange={(event, editor) => {
                                                                  const data = editor.getData();
                                                                  updateFieldContent(data,'content');
                                                              }}
                                                              className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
                                                </div>



                                            </div> :

                                            <div>
                                                <div className="form-group">
                                                    <label>Tiêu đề thông báo</label>
                                                    <input value={formUpdateNoti.theme} type="text" className="form-control title" onChange={(e) => {
                                                        updateFieldNotiUpdate(e, 'theme')
                                                    }}/>
                                                </div>

                                                <div className="form-group">
                                                    <label>Nội dung bài viết</label>
                                                    <CKEditor data={ formUpdateNoti.content }
                                                              onChange={(event, editor) => {
                                                                  const data = editor.getData();
                                                                  updateFieldNotiUpdateContent(data,'content');
                                                              }}
                                                              className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
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
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th className="col-4">createdAt</th>
                                    <th className="col-2">Tools</th>
                                </tr>
                                </thead>
                                <tbody>

                                {dataNoti.map((noti, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{noti.theme}</td>
                                        <td>{noti.created_at}</td>
                                        <td>

                                            <button
                                                className="btn btn-primary btn-sm mr-1" onClick={() => {
                                                    set_id(noti.id)
                                                    setFormUpdate(noti)
                                                    handleShow()

                                            }}>
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </button>
                                            <button className="btn btn-danger btn-sm del-post-list"
                                                    data-id="" onClick={() => {
                                                        doDeleteUser(noti.id)
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
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
