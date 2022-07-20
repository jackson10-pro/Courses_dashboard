import React from "react";
import n from "./n.jpg";
import "./card1.css";
import {DiPhp} from "react-icons/di";

export class Card1 extends React.Component{

    render(){
        return(
            <div id="card1_header">
                <header>
                    <h1>Your Courses</h1>
                    <button>PREMIUM</button>
                    <img src={n} alt="My Picture"/>
                    <p>26 courses</p>
                </header>
                <div id="section_one">
                    <label id="php_label"><DiPhp size="2em"/></label>
                    <label id="beginner_label">Beginners</label>
                    <h3>Fun with PHP</h3>
                </div>
                <div id="section_two">
                    <p>by <span><img src={n} alt="this is dog"/></span> Darrell Steward</p>
                </div>

            </div>
        );
    }
}