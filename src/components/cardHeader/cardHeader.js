import React from "react";
import r from "./richie.jpg";
import "./cardHeader.css";
import { DiPhp } from "react-icons/di";
import { LineChart } from "../charts/line.chart";

export class CardHeader extends React.Component {
  render() {
    return (
      <div id="card1_header">
        <header>
          <h1>Your Courses</h1>
          <button>PREMIUM</button>
          <img src={r} alt="this the dog" />
          <p>26 courses</p>
        </header>
        <div></div>
        <br />
        <br />
        <div style={{ height: "400px", width: "560px", marginTop: "1.5rem" }}>
          <LineChart width="300" height="400" />
        </div>
      </div>
    );
  }
}
