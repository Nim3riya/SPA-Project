import React from "react";
import a from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={a.dialogs}>
            <div className={a.dialogsItems}>
                <div className={a.item}>
                    Наталья
                </div>
                <div className='item'>
                    Александр
                </div>
            </div>
            <div className={a.messages}>
                <div className={a.message}>Привет</div>
                <div className={a.message}>Как дела?</div>
            </div>
        </div>
    )
};

export default Dialogs;