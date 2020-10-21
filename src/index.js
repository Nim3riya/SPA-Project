import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dialogData = [
    {id: 1, name: 'Наталья'},
    {id: 2, name: 'Александр'}
];
let messagesData = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела?'}
];

let postData = [
    {id: 1, message: 'Хочу лето и тепло', like: 1},
    {id: 2, message: 'Люблю осеннюю погоду', like: 2}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messagesData={messagesData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
