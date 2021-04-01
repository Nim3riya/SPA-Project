import React from "react";
import a from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={a.nav}>
            <div className={`${a.item} ${a.active}`}>
                <NavLink to='/profile' activeClassName={a.active}> Профиль </NavLink>
            </div>
            <div className={a.item}>
                <NavLink to='/dialogs' activeClassName={a.active}>Сообщения</NavLink>
            </div>
            <div className={a.item}>
                <NavLink to='/users' activeClassName={a.active}>Пользователи</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;