import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import "./Table.css";
import {Button, Modal} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const Table = () => {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <th>Content</th>
                                <th>createdAt</th>
                                <th>Tools</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th className="col-1">ID</th>
                                <th className="col-4">Title</th>
                                <th className="col-4">Content</th>
                                <th className="col-1">createdAt</th>
                                <th className="col-2">Tools</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Thông báo nghỉ lễ 30-4 và 1-5</td>
                                <td>Sinh viên được nghỉ học từ ngày 30/04/2022 đến hết ngày 03/05/2022 theo công văn số 798/ĐHKHTN-TCCB-HC ngày 05/4/2022...</td>
                                <td>29/04/2022</td>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>








        </div>

    )

}
export default Table;
