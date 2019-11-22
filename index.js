import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Fruits from './Fruits';
import Basket from './Basket';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      fruits: ['fruit1','fruit2','fruit3'],
      selectedFruitValue : '',
      basketList: [],
    };
    this.selectedFruit = this.selectedFruit.bind(this);
  }
  /*componentDidUpdate(prevProps,prevState){
  console.log(this.state.selectedFruitValue+'---updated');
}*/
selectedFruit() {
  const index = event.target.selectedIndex;
  let selectedOption = event.target.options[index].value;
  this.setState({selectedFruitValue:selectedOption,});
  /*this.setState((state)=> {return selectedFruitValue = selectedOption});*/
};

addOrRemove(value){
  console.log(value);

}


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Fruits fruits={this.state.fruits} selectedFruitValue={this.state.selectedFruitValue} selectedFruitFn={this.selectedFruit}/>
        <Button clickFunction={this.addOrRemove}/>
        <Basket/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
