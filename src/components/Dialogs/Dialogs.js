import React from "react";
import a from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem.";

const Dialogs = (props) => {
    let dialogElement =  props.state.dialogData.map( (el) => {
        return <DialogItem id={el.id} name={el.name}/>
    });

    let messageElement = props.state.messagesData.map( (el) => {
        return <Message id={el.id} message={el.message}/>
    });

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