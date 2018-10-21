class Clock extends Component {
constructor() {
super()
this.state = getClockTime() //?
}//close constructor()

componentDidMount() {
console.log("stating clock")
this.ticking = setInterval(()=>
  this.setState(getClockTime()),
  1000)
}//close componentDidMount()

//Stop Background processes here
componentWillUnmount() {
  clearInterval(this.ticking)//stop bg processes
  console.log("Stopping Clock")
}
//when inside the render() method return requires ( )'s
render() {
const { hours, minutes, seconds, ampm } = this.state
  return (
    <div>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      <span>{ampm}</span>
      <button onClick={this.props.onClose}>X</button>
    </div>
  )
}//close return
}//close <Clock>
