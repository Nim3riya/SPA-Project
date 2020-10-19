import React from "react";
import a from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

let dialogData = [
    {id: 1, name: 'Наталья'},
    {id: 2, name: 'Александр'}
];
let messadesData = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела?'}
];

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={a.item}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={a.message}>{props.message}</div>
    )
};

let dialogElement =  dialogData.map( (el) => {
    return <DialogItem id={el.id} name={el.name}/>
});

let messageElement = messadesData.map( (el) => {
    return <Message id={el.id} message={el.message}/>
});

const Dialogs = (props) => {
    return (
        <div className={a.dialogs}>
            <div className={a.dialogsItems}>
                {dialogElement}
            </div>
            <div className={a.messages}>
                {messageElement}
            </div>
        </div>
    )
};

export default Dialogs;