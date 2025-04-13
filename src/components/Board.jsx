import Square from "./Square"
export default function Board(props){
    const { squares, onClick } = props
    const style = {
        border: '4px solid darkblue',
        borderRadius: '10px',
        width: '250px',
        height: '250px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    };
    return (
        <div style={style} className="board">
            {squares.map((square, i) => (
              
                    <Square key={i} value={square} onClick={() => onClick(i)}/>
                
            ))}
                      
        </div>
    )
}