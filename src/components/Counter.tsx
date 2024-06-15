import React, {useState} from 'react';
import "./style.css";

interface Props{
  user:String
}

const Counter: React.FC <Props> = ({user}:Props) => {

  const [counter, setCounter] = useState<number>(0);

  const handleClick = (operation: string): void => {
    if (operation === "decrement"){
      setCounter(counter - 1);
    }else if (operation === "increment"){
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }

  return (
    <div className='counter'>
      <h1 className='counter display'>{counter}</h1>
      <div className='buttonContainer'>
        <button className='button red' onClick={() => handleClick("decrement")}>Decrement</button>
        <button className='button blue' onClick={() => handleClick("reset")}>Reset</button>
        <button className='button green' onClick={() => handleClick("increment")}>Increment</button>
      </div>
      <p>This App Was Developed By: {user}</p>
    </div>
  )
}

export default Counter