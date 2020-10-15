import React from "react";
import a from "./Header.module.css";


const Header = () => {
    return (
        <header className={a.header}>
            <div className={a.loginBlock}>Login</div>
        </header>
    )
};

export default Header;