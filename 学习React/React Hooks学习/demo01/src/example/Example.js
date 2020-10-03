import React, { useReducer } from 'react';
import Buttons from './Buttons';
import ShowArea from './showArea';
import { Color } from './color';

function Example() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default Example