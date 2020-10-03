import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0); // 数组解构
  const [age, setAge] = useState(21);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <p>年龄{age}</p>
    </div>
  )
}
export default Example;