import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialodsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.dialogsPage;
    const addMessage = () => {
        props.dispatch(addMessageAC());
    };

    const onNewMessageChange = (text) => {
        props.dispatch(updateMessageTextAC(text));
    };

    return ( <Dialogs updateMessageText={onNewMessageChange}
                      addMessage={addMessage}
                      state={state}
    />)
};

export default DialogsContainer;