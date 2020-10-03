import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter() {
  const count = useContext(CountContext)  //一句话就可以得到count
  return (<h2>{count}</h2>)
}

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}
export default Example;