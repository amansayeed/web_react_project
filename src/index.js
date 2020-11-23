import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';


ReactDom.render(


    <BrowserRouter><App/></BrowserRouter>
  
  ,document.querySelector('#root')
)