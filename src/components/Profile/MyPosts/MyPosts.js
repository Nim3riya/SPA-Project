import React from "react";
import a from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    let postElements = props.postData.map((el) => {
        return <MyPost message={el.message} id={el.id} like={el.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return <div className={a.postsBlock}>
        <h3> Мой пост </h3>
        <div>
            <div>
                <textarea ref={newPostElement} placeholder='Напишите текст' />
            </div>
            <div>
                <button onClick={addPosts}>Добавьте пост</button>
            </div>
        </div>
        <div className={a.post}>
            {postElements}
        </div>
    </div>
};
export default MyPosts;
