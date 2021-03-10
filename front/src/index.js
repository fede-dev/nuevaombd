import React from "react";
import ReactDOM from "react-dom";
import Main from './containers/Main'
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Main} />
    </BrowserRouter>,
    document.getElementById("root")
);







