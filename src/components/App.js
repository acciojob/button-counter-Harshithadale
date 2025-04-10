
import React from "react";
import './../styles/App.css';

const App = () => {
  const [num,setNum] = React.useState(0)
  const handleInput=()=>{
    setNum(num + 1)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {num} times</p>
        <button onClick={handleInput}>Click me</button>
    </div>
  )
}

export default App
