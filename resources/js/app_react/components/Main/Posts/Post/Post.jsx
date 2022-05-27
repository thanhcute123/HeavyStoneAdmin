import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import avatar from "../../../../img/undraw_profile.svg";
// import image from "../../../../../../../public/images/1653580640.png";

import {Modal} from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

import "./Post.css";
import moment from "moment";
import Title from "../Title/Title";
import {NameFaculty} from "../../../Store/ContextNameFaculty";

const Post = ({nameFaclty}) => {

    const context = useContext(NameFaculty)
    console.log("tesstName-----", context.nameFaculty)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dataPost, setDataPost] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [formDataPost, setFormDataPost] = useState({
        status: "",
        content:""
    });
    const [formDataPostUpdate, setFormDataPostUpdate] = useState([])

    const getDataPost = () => {
        axios.get("http://127.0.0.1:8000/api/post/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataPostduyet----", result);
                    // this.dataPost = result.data
                    setIsLoaded(true);
                    let rows = [];
                    let tags;
                    for (let i in result) {
                        // console.log(result.data[i])
                        tags = JSON.parse(result[i].tags);
                        console.log("tags----",tags);
                        let date = moment(result[i].created_at);
                        let dateComponent = date.utc().format('YYYY-MM-DD');
                        let timeComponent = date.utc().format('HH:mm:ss');
                        let time = dateComponent + " " + timeComponent;
                        rows.push({
                            id: result[i].id,
                            id_user: result[i].id_user,
                            theme: result[i].theme,
                            content: result[i].content,
                            image: result[i].image,
                            faculty: tags.faculty,
                            major: tags.major,
                            created_at: time
                        });
                    }


                    setDataPost(rows);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }



    const getDataUser = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datauser----", result);
                    setIsLoaded(true);
                    setDataUser(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const doUpdatePost = () => {
        const postData = formDataPostUpdate;
        console.log("postData---", formDataPostUpdate);
        let id = formDataPostUpdate.id
        axios.put(`http://127.0.0.1:8000/api/post/update/${id}`,{
            id_user: formDataPostUpdate.id_user,
            theme: formDataPostUpdate.theme,

            content: formDataPostUpdate.content,
            tags: formDataPostUpdate.tags,
            status: formDataPostUpdate.status
            // postData
        })
            .then(res => {
                getDataPost()
            })


    }

    const  updateField = (e, key) => {
        formDataPostUpdate[key] = e.target.value;
        setFormDataPostUpdate({...formDataPostUpdate});
        console.log(formDataPostUpdate);
    }
    const  updateFieldContent = (data, key) => {
        formDataPostUpdate[key] = data;
        setFormDataPostUpdate({...formDataPostUpdate});
        console.log(formDataPostUpdate);
    }

    const formPostUpdate = (data) => {
        setFormDataPostUpdate(data)
        console.log("aaa-", formDataPostUpdate);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
       doUpdatePost();

    }



    useEffect(() => {
        // const timer = window.setInterval(() => {
            getDataPost();
            getDataUser();
        // }, 10000);
        // return () => { // Return callback to run on unmount.
        //     window.clearInterval(timer);
        // };

    }, [])
    return (
        <div className="posts">
            <div>
                <Title />
                <form
                    onSubmit={(ev) => {

                    }}
                >
                    <Modal show={show} onHide={handleClose}
                           aria-labelledby="contained-modal-title-vcenter"
                           centered
                    >
                        <Modal.Header>
                            <Modal.Title>
                                <div className="uppost-title">Post</div>
                            </Modal.Title>
                        </Modal.Header>
                        <div className="d-flex justify-content-around">
                            <div className="w-100 border-end">

                                <Modal.Body>

                                    <div className="w-100">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input disabled  type="text" className="form-control title" value={formDataPostUpdate.id_user}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Theme</label>
                                            <input disabled type="text" className="form-control title" value={formDataPostUpdate.theme}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Content</label>
                                            {/*<input value={formDataPostUpdate.content} type="text" className="form-control title" onChange={(e) => {*/}
                                            {/*    updateField(e,'context')*/}
                                            {/*}}/>*/}


                                            <CKEditor  disabled data={ formDataPostUpdate.content }
                                                      onChange={(event, editor) => {
                                                          const data = editor.getData();
                                                          updateFieldContent(data,'content');
                                                      }}
                                                      className="mt-3 wrap-ckeditor" editor={ClassicEditor}/>


                                        </div>

                                        <div className="form-group">
                                            <label>Status</label>
                                            <div className="d-flex">

                                                <div className="form-check m-3">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                           id="flexRadioDefault2" value={1} onChange={(e) => {
                                                        updateField(e,'status');
                                                    }}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Duyệt
                                                    </label>
                                                </div>
                                                <div className="form-check m-3">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                           id="flexRadioDefault2" value={2} onChange={(e) => {
                                                        updateField(e,'status');
                                                    }}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Xóa
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </Modal.Body>
                                <Modal.Footer>

                                    <div>
                                        <button type="button" className="btn btn-secondary"  data-dismiss="modal" onClick={handleClose}>Hủy bỏ</button>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary" onClick={(e) => { handleSubmit(e); handleClose()}}>Ghi lại</button>
                                    </div>
                                </Modal.Footer>
                            </div>


                        </div>


                    </Modal>
                </form>


                {dataPost.map((post, idx) =>(
                    // console.log("postaaaa---", post)

                    post.faculty === context.nameFaculty &&

                    <div key={idx} className="post d-flex align-items-center">
                        <div className="col-lg-9 ">
                            <div className="doc-tag">
                                <ul className="d-flex">
                                    <li className="doc-tag-item">{post.faculty}</li>
                                    <li className="doc-tag-item">{post.major}</li>
                                </ul>
                            </div>
                            {dataUser.map((user, idx) =>(
                                user.id_user === post.id_user &&
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={avatar} width="40px"/>
                                    </div>
                                    <div className="ml-2">
                                        <div className="username">{user.username}</div>
                                        <div className="time text-muted">{post.created_at}</div>
                                    </div>
                                </div>
                            ))}


                            <div className="ml-2">
                                <div className="description mt-2">
                                    {post.theme}


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 border-right">
                            <div className="mb-1">Trạng thái</div>
                            <li className="doc-tag-item status">Bài viết đang chờ duyệt...</li>

                        </div>
                        <div className="col-lg-1">
                            <button className="rounded-pill button-detail" onClick={() => {
                                formPostUpdate(post);
                                handleShow()
                            }}>
                                detail
                            </button>
                        </div>

                    </div>

                ))}

            </div>
        </div>


    )
}

export default Post;
