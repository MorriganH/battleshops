import "./styles/gameBoard.css";

export default function GameBoard() {
  const elements = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      elements.push(`${String.fromCharCode(j + 64)}${i}`);
    }
  }

  const handleClick = event => {
    event.currentTarget.classList.add("hit");
  };

  const elementsHTML = elements.map(element => (
    <div className="grid-item" onClick={handleClick} key={element} id={element}>
      {/* {element} */}
    </div>
  ));

  return <div className="gameBoard">{elementsHTML}</div>;
}
