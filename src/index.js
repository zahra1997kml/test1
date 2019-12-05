import React from 'react'
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import ComponentM from "./ComponentM";
import App from './App'
ReactDOM.render(
    <ComponentM/>, document.getElementById('root'))