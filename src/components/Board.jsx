import Square from "./Square"
export default function Board(props){
    const { onClick } = props
    return (
        <div className="board">
            <Square value="1" onClick={onClick}/>
            <Square value="2" onClick={onClick}/>
            <Square value="3" onClick={onClick}/>
            <Square value="4" onClick={onClick}/>  
            <Square value="5" onClick={onClick}/>  
            <Square value="6" onClick={onClick}/>
            <Square value="7" onClick={onClick}/>
            <Square value="8" onClick={onClick}/>
            <Square value="9" onClick={onClick}/>           
        </div>
    )
}