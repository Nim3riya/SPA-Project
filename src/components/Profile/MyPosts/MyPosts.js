import React from "react";
import a from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";


const MyPosts = () => {
    return <div className={a.postsBlock}>
        <h3> Мой пост </h3>
        <div>
            <div>
                <textarea placeholder='Напишите текст'/>
            </div>
            <div>
                <button>Добавьте пост</button>
            </div>
        </div>
        <div className={a.post}>
            <MyPost/>
            <MyPost/>
        </div>
    </div>
};
export default MyPosts;
