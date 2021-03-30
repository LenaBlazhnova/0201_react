import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}
function MainPage(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.pinimg.com/originals/41/80/92/418092dcae99c77d214d66595f67541f.jpg" className="d-block w-100" alt="cherry" style={{height:550}}/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/ctAEWKgCSZA/maxresdefault.jpg" className="d-block w-100" alt="fruits" style={{height:550}}/>
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgZ3fZ-kU50uaX0TWISGXfDODm9pAB-dbww&usqp=CAU" className="d-block w-100" alt="..." style={{height:550}}/>
                </div>
            </div>
        </div>
    )
}
function AboutUs(){
    return(
        <div className="container my-5">
            <h1>О нас</h1>
            <div>
                <p>Информация о нас.</p>
                <img src="https://i.pinimg.com/736x/61/71/14/61711465dbebf69dda94d12cc593414e.jpg" alt="team" />
            </div>
        </div>
    )
}
function ContactUs(){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><MainPage/>} />
                <Route path="/about" render={()=><AboutUs/>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
            </BrowserRouter>
        </div>  );
}

export default App;
