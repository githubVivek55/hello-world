import React from "react";
import logo from '../../logo.svg';

class MainContent extends React.Component{
    render(){
        return(
           <div>
               <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Gym</h1>
                </header>
           </div>
        );
    }
}

export default MainContent;