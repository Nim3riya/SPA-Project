import React from "react";
import a from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem.";

const Dialogs = (props) => {

    let dialogElement = props.dialogsPage.dialogData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messageElement = props.dialogsPage.messagesData.map(el => <Message key={el.id} message={el.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let addMessage = () => {
        props.addMessage()
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessageText(text)
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