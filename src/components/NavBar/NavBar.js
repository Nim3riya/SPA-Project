import React from "react";
import a from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav className={a.nav}>
            <div>Профиль</div>
            <div>Сообщения</div>
            <div>Пользователи</div>
        </nav>
    )
};

export default NavBar;