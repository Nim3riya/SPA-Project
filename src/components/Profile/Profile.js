import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.postData}
                     dispatch={props.dispatch}
                     newText={props.state.newTextPost}/>
        </div>
    )
};

export default Profile;