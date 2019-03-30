import React, { Component } from 'react';
import './App.css';

interface State {
  list: Array<number>;
}

interface Props {
}

class App extends Component<Props, State> {
  public state: State;
  // public props: Props;
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
      </div>
    );
  }
}

export default App;
