import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Fruits from './Fruits';
import Basket from './Basket';
import Button from './Button';
import ColorPicker from './ColorPicker';
import ApplySelectedColor from './ApplySelectedColor';
class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: ['fruit1','fruit2','fruit3'],
      selectedFruitValue : 'fruit1',
      basketList: [],
      selectedColor:'',
     colorsArray:['Grey','Pink','Orange','Yellow','Green','Black']
    };
   
  }

selectedFruit(e) {
  let {name, value} = e.target;
  this.setState({
  selectedFruitValue: value,
});
};

addOrRemove(value){
  let basketArray = this.state.basketList;
  if(value == 'add'){
    basketArray.push(this.state.selectedFruitValue);
    this.setState({
      basketList : basketArray,
    });
  }else{
    const removeVal = basketArray.lastIndexOf(this.state.selectedFruitValue);
    let reomovedBasketList = basketArray.splice(removeVal, 1);
    this.setState({
      basketList : reomovedBasketList,
    });
  }
}

colorPickerFn(color){
  let colorPicked=color;
  this.setState({
    selectedColor:color
  })
}

  render() {
    return (
      <div>
        <Fruits fruits={this.state.fruits} selectedFruitFn={(e)=>this.selectedFruit(e)} selectedFruitVal={this.state.value}/>
        <Button clickFunction={(e) => this.addOrRemove(e)}/>
        <Basket basketList={this.state.basketList}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
