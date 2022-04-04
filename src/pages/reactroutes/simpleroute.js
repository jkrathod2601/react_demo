import Home from "./home"
import About from "./about"
import Contact from "./contact"
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Simpleroute=()=>{
    return (
     <div>
        <a href="/about">About</a><br/>
        <a href="/">home</a><br/>
        <a href="/contact">Contact</a><br/>
        <Switch>     
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/about" component={About}></Route>
        </Switch>
    </div>
    )
}

export default Simpleroute