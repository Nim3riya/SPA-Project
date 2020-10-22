import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render= {() => <Profile state={props.state.profilePage}
                                                   addPost={props.addPost}/>} />
                    <Route path='/dialogs'
                           render= {() => <Dialogs state={props.state.dialogsPage}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;