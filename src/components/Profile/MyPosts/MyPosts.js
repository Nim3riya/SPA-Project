import React from "react";
import a from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    let postElements = props.profilePage.postData.map((el) => {
        return <MyPost key={el.id} message={el.message} id={el.id} like={el.likesCount}/>
    });

    let newPostElement = React.createRef();

    let onAddPosts = () => {
        props.addPosts();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateText(text)
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
                <button onClick={onAddPosts}>Добавьте пост</button>
            </div>
        </div>
        <div className={a.post}>
            {postElements}
        </div>
    </div>
};
export default MyPosts;
