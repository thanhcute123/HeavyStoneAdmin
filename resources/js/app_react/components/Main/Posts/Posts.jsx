import React from "react";
import "./Posts.css";
import Title from "../Posts/Title/Title";
import Post from "./Post/Post";
import Faculty from "./Faculty/Faculty";

const Posts = () => {
    return (
        <div className="posts">
            <div>
                <Title />
                <Post />
                {/*<Post />*/}
                {/*<Post />*/}
                {/*<Faculty/>*/}
            </div>
        </div>
    )
}

export default Posts;
