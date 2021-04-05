import React from "react";
import {NavLink} from "react-router-dom";

export function Menu(){
    return(
        <nav className="nav" style={{backgroundColor:"LightGrey"}}>
            <NavLink className="nav-link active" style={{color:"darkblue",fontFamily:"cursive"}} aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" style={{color:"darkblue",fontFamily:"cursive"}} to="/about">О нас</NavLink>
            <NavLink className="nav-link" style={{color:"darkblue",fontFamily:"cursive"}} to="/contact-us">Контакты</NavLink>
            <NavLink className="nav-link" style={{color:"darkblue",fontFamily:"cursive"}} to="/reg">Регистрация</NavLink>
        </nav>
    )
}