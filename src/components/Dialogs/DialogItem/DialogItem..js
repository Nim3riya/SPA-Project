import  React from 'react';
import a from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={`${a.item} ${a.active}`}>
        <NavLink to={path} activeClassName={a.active}> {props.name} </NavLink>
    </div>
};

export default DialogItem