import React from "react";
import { LeftSide } from "../leftSide/leftSide";
import "./app.css";
import { Header } from "../header/header";
import { CardHeader } from "../cardHeader/cardHeader";
import { Cardt } from "../card/cards";


let width={
    width: '100%',
    height: '100%'
};
export class App extends React.Component{
    render(){
        return(     
            <div id="app_main">
                <div style={width} id="left_side">
                    <LeftSide />
                </div>
                <div id="app_header">
                    <Header />
                </div> 
                <div id="title">
                    <CardHeader />
                </div>
                <div id="sc">
                    <Cardt />
                </div>
                
            </div>
            
        );
    }
}