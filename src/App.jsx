import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBaord";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GameBoard/>
    </>
  );
}
