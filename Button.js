import React from 'react';

export default function Button(props){
  return <div>
            <button onClick={e => props.clickFunction('add')}>Add</button> &nbsp; <button onClick={e => props.clickFunction('remove')}>Remove</button>
          </div>;
}