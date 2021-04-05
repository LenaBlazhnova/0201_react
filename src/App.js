import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {Reg} from "./components/Reg";



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
        <div className="container">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><PostList/>} />
                <Route path="/about" render={()=><AboutUs/>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
                <Route path="/post" render={()=><Post/>}/>
                <Route path="/reg" render={()=><Reg/>}/>

            </BrowserRouter>
        </div>  );
}

export default App;
