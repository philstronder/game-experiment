import logo from './logo.svg';
import classes from './App.module.css'
import {useRef} from 'react'

function App() {
  const moveSize = 10

  const actorRef = useRef()

  const handleMoveLeft = (e) => {
    actorRef.current.style.left = (actorRef.current.offsetLeft - moveSize).toString() + 'px'
  }

  const handleMoveRight = (e) => {
    actorRef.current.style.left = (actorRef.current.offsetLeft + moveSize).toString() + 'px'
  }

  const handleMoveUp = () => {
    actorRef.current.style.top = (actorRef.current.offsetTop - moveSize).toString() + 'px'
  }

  const handleMoveDown = () => {
    actorRef.current.style.top = (actorRef.current.offsetTop + moveSize).toString() + 'px'
  }

  return (
    <div className="App">
      <div className={classes.Actor} ref={actorRef}>X</div>
      <button onClick={handleMoveLeft}>LEFT</button>
      <button onClick={handleMoveRight}>RIGHT</button>
      <button onClick={handleMoveUp}>UP</button>
      <button onClick={handleMoveDown}>DOWN</button>
    </div>
  );
}

export default App;
