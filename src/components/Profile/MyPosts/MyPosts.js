import React from 'react';
import a from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";


const MyPosts = () => {
    return <div className={a.postsBlock}>
        <h3> My post </h3>
        <div>
            <div>
                <textarea placeholder='Add text'/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
        <div className={a.post}>
            <MyPost/>
            <MyPost/>
        </div>
    </div>
};
export default MyPosts;
