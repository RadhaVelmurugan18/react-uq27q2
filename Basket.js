import React from 'react';

export default function Basket(props){
  const basketList  = props.basketList.map((value,index) => {
return <li>{value}</li>
  })
return <ul>{basketList}</ul>;
}