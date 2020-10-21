import React from "react";
import a from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    let postElements = props.postData.map((el) => {
        return <MyPost message={el.message} id={el.id} like={el.likesCount}/>
    });
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
            {postElements}
        </div>
    </div>
};
export default MyPosts;
