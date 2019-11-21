import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Fruits from './Fruits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      fruits: ['fruit1','fruit2','fruit3'],
      selectedFruitValue : ''
    };
    //this.selectedFruit = this.selectedFruit.bind(this);
  }
  componentDidUpdate(prevProps,prevState){
  console.log(this.state.selectedFruitValue+'---updated');
}
selectedFruit(){
  const index = event.target.selectedIndex;
  const selectedOption = event.target.options[index].value;
  this.setState({selectedFruitValue:selectedOption});
  /*this.setState((state)=> {return selectedFruitValue = selectedOption});*/
    console.log(this.state.selectedFruitValue);
}


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Fruits fruits={this.state.fruits} selectedFruitFn={e => this.selectedFruit()}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
