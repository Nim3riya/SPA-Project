import React from "react";
import a from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem.";

const Dialogs = (props) => {
    let dialogElement = props.state.dialogData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messageElement = props.state.messagesData.map(el => <Message message={el.message}/>);
    let newMessageBody = props.state.newMessageBody;

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