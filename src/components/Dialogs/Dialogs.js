import React from "react";
import a from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem.";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialodsReducer";


const Dialogs = (props) => {
    let state = props.store.dialogsPage;
    let dialogElement = state.dialogData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messageElement = state.messagesData.map(el => <Message message={el.message}/>);
    let newMessageBody = state.newMessageBody;

    let addMessage = () => {
        props.dispatch(addMessageAC());
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageTextAC(text));
    };

    return (
        <div className={a.dialogs}>
            <div className={a.dialogsItems}>
                {dialogElement}
            </div>
            <div className={a.messages}>
                <div>{messageElement}</div>
                <div> <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Введите сообщение'/>
                </div>
                <div> <button onClick={addMessage}>Добавить</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;