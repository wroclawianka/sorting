import React, { Component } from 'react';
import './App.css';
import  BubbleSorting from './components/BubbleSorting';
import  SelectionSorting from './components/SelectionSorting';

interface State {
  list: Array<number>;
}

interface Props {
}

class App extends Component<Props, State> {
  public state: State;
  constructor(props : Props)  {
    super(props);
    this.state = {
      list : []
    }
  }

  componentWillMount() {
    this.getDefaultList();
  }

  getDefaultList() {
    const defaultList : Array<number> = [6, 5, 3, 1, 7, 8, 2, 4];
    this.setState({
      list : defaultList
    });
  }

  render() {
    return (
      <div className="App">
       <h1>Sorting Algorithms App</h1>
       <p>{this.state.list}</p>
       <div>
          <BubbleSorting list={this.state.list}></BubbleSorting>
          <SelectionSorting list={this.state.list}></SelectionSorting>
       </div>
      </div>
    );
  }
}

export default App;
