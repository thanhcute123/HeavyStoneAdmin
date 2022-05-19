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

    const getDataUrnotiApi = () => {
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
    useEffect(() => {
        getDataUrnotiApi();

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div className="w-100">
                <Modal show={show} onHide={handleClose}
                       size="xl"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header>
                        <Modal.Title>
                            <div className="uppost-title">Thêm thông báo khẩn cấp</div>
                        </Modal.Title>
                    </Modal.Header>
                    <div className="d-flex justify-content-around">
                        <div className="w-100 border-end">

                            <Modal.Body>

                                <div className="w-100">
                                    <form>
                                        <div className="form-group">
                                            <label>Tiêu đề thông báo</label>
                                            <input type="text" className="form-control title"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nội dung thông báo</label>
                                            {/*<input type="text" className="form-control title"/>*/}
                                            <textarea id="body_edit_post" className="form-control"></textarea>
                                        </div>
                                        {/*<div className="w-50">*/}
                                        <CKEditor className="mt-3 wrap-ckeditor" editor={ClassicEditor}/>
                                        {/*</div>*/}
                                        {/*<Editor*/}
                                        {/*    name="description"*/}
                                        {/*    onChange={(data) => {*/}
                                        {/*        setData(data);*/}
                                        {/*    }}*/}
                                        {/*    editorLoaded={editorLoaded}*/}
                                        {/*/>*/}

                                    </form>
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="btn-secondary" onClick={handleClose}>Hủy</Button>
                                <Button className=" button-uppost" onClick={handleClose}>
                                    Đăng
                                </Button>
                            </Modal.Footer>
                        </div>


                    </div>
                    {/*<Modal.Footer>*/}
                    {/*    <Button variant="secondary" onClick={handleClose}>*/}
                    {/*        Đăng*/}
                    {/*    </Button>*/}
                    {/*</Modal.Footer>*/}

                </Modal>
                <div className="card shadow mb-4 card-table">
                    <div className="card-body">
                        <div className="table-add">
                            <button className="button-add" onClick={handleShow}>+ Add</button>
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
                                            <a href=""
                                               className="btn btn-primary btn-sm mr-1">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </a>
                                            <a className="btn btn-danger btn-sm del-post-list"
                                               data-id="">
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </a>
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
