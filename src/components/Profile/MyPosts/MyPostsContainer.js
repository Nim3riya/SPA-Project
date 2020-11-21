import React from "react";
import {addPostAC, updateTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newText: state.profilePage.newTextPost
    }
};
const mapDispatchToProps =(dispatch) => {
    return {
        updateText: (text) => {
            let action = updateTextAC(text);
            dispatch(action)
        },
        addPosts: () => {
            dispatch(addPostAC());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
