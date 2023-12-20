import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

export default function App() {
  return (
    <>
      <div className="topLegend">
        {/* <p></p> */}
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <p>E</p>
        <p>F</p>
        <p>G</p>
        <p>H</p>
        <p>I</p>
        <p>J</p>
      </div>
      <div className="boardContainer">
        <div className="sideLegend">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <GameBoard />
      </div>
    </>
  );
}
