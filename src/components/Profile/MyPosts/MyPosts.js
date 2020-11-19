import React from "react";
import a from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";
import {addPostAC, updateTextAC} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postElements = props.postData.map((el) => {
        return <MyPost message={el.message} id={el.id} like={el.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostAC());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextAC(text));
    };

    return <div className={a.postsBlock}>
        <h3> Мой пост </h3>
        <div>
            <div>
                <textarea value={props.newText}
                          onChange={onPostChange}
                          ref={newPostElement}
                          placeholder="Введите текст"
                />
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
