import Board from "./Board"

export default function Game() {
  function handleClick() {
        console.log("Square clicked")
    }

  // function jumpTo() {
  //       console.log("Jump to clicked")
  //   }
  // function renderMoves() {
  //       console.log("Render moves clicked")
  //   }
    return (
        <Board onClick={handleClick}/>
    )
    }