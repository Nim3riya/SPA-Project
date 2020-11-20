import React from "react";
import {addPostAC, updateTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addPosts = () => {
        props.dispatch(addPostAC());
    };

    let onPostChange = (text) => {
        let action = updateTextAC(text);
        props.dispatch(action)
    };

    return (<MyPosts updateText={onPostChange} addPosts={addPosts} postData={props.store.postData} newText={props.store.newTextPost}/>)
};
export default MyPostsContainer;
