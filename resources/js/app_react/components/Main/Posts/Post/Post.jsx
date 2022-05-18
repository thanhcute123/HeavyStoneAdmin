import React, {useState, useEffect} from "react";
import axios from "axios";
import avatar from "../../../../img/undraw_profile.svg";
import "./Post.css";


const Post = () => {
    const [dataPost, setDataPost] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getDataPost = () => {
        axios.get("http://127.0.0.1:8000/api/post/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataPost----", result.data);
                    // this.dataPost = result.data
                    setIsLoaded(true);
                    let rows = [];
                    let tags;
                    for (let i in result.data) {
                        // console.log(result.data[i])
                        tags = JSON.parse(result.data[i].tags);
                        console.log("tags----",tags);
                        rows.push({
                            id: result.data[i].id,
                            id_user: result.data[i].id_user,
                            theme: result.data[i].theme,
                            content: result.data[i].content,
                            faculty: tags.faculty,
                            major: tags.major,
                            created_at: result.data[i].created_at
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

    useEffect(() => {
        getDataPost();
        getDataUser();

    }, [])
    return (

        <div>
            {dataPost.map((post, idx) =>(
                <div key={idx} className="post d-flex align-items-center">
                    <div className="col-lg-11 border-right">
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
                    <div className="col-lg-1">
                        <button className="rounded-pill button-detail">
                            detail
                        </button>
                    </div>

                </div>

            ))}

        </div>
    )
}

export default Post;
