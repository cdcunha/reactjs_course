import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/article/:slug" component={SingleArticle}/>
            <Route path="/articles/create" component={CreateArticle}/>
            <Footer/>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
