import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class DynamicImport extends Component {
    state = {
        component: null
    }
    componentWillMount() {
        this.props.load()
            .then((mod) => this.setState(() => ({
                    component: mod.default 
                })))
            }
    }
    render() {
        return this.props.children(this.state.component)
    }
}

//Nav bar
const Nav = (props) => ( 
         <DynamicImport load = {
            ()=> import ('./Nav') } > {
            (Component) => Component === null ?
            <h1> Loading </h1> :
                < Component {...props}/>} 
                </DynamicImport>
        )
const Alexi = (props) => ( 
         <DynamicImport load = {
               ()=> import ('./Alexi') } > {
               (Component) => Component === null ?
               <h1> Loading </h1> :
                   < Component {...props}/>} 
                   </DynamicImport>
           )
        
const ForEmma = (props) => ( 
        <DynamicImport load = {
            ()=> import ('./ForEmma') } > {
            (Component) => Component === null ?
            <h1> Loading </h1> :
              < Component {...props}/>} 
               </DynamicImport>
            ) 

        
const Moses = (props) => ( 
     <DynamicImport load = {
            ()=> import ('./Moses') } > {
            (Component) => Component === null ?
            <h1> Loading </h1> :
         < Component {...props}/>} 
        </DynamicImport>
                    ) 
                   
const Home = (props) => ( 
            <DynamicImport load = {
                ()=> import ('./Home') } > {
                    (Component) => Component === null ?
                    <h1> Loading </h1> :
                    < Component {...props}/>} 
                    </DynamicImport>
                                       )                     

                              


function App() {
    return ( 
        <Router >
        <div className = "App" >

        <Nav />
        <Switch>
        <Route path ="/" exact component= { Home } />
        <Route path = "/Alexi" component = { Alexi } /> 
        <Route path = "/ForEmma" component = { ForEmma } />  
        <Route path = "/Moses" component = { Moses } />
        </Switch>

       
        </div>

        </ Router >
       

    );
}

const Home =()=> (
    <div>
        <h1 className="header">Home Page</h1>

    </div>
);

export default App;