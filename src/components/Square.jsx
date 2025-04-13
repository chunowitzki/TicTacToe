export default function Square(props) {
  const { value, onClick } = props

  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};
  return (
    <button style={style} onClick={onClick} className="square">
      {value}
    </button>
  )
}