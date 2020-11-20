import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render= {() => <Profile state={props.store.profilePage}
                                                   dispatch={props.dispatch}
                           />} />
                    <Route path='/dialogs'
                           render= {() => <DialogsContainer store={props.store} dispatch={props.dispatch}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;