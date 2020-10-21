import React from 'react';
import a from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={a.message}>{props.message}</div>
};
export default Message