import React, { Component } from 'react';
import './App.css';
import BubbleSorting from './components/BubbleSorting/BubbleSorting';
import SelectionSorting from './components/SelectionSorting/SelectionSorting';
import InsertionSorting from './components/InsertionSorting/InsertionSorting';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface State {
  list: Array<number>;
}

interface Props {
}

class App extends Component<Props, State> {
  public state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    this.getDefaultList();
  }

  getDefaultList() {
    const defaultList: Array<number> = [6, 5, 3, 1, 7, 8, 2, 4];
    this.setState({
      list: defaultList
    });
  }

  render() {
    return (
      <div>
          <Container className="text-center" id="page-content">
            <Row className="justify-content-center">
              <Col className="col-md-7">
                <h1 className="font-weight-light mt-4">Sorting Algorithms</h1>
                <p className="lead">List of the elements</p>
                <p className="lead">
                  {this.state.list.map(function (element) {
                    return <span className="list-element">{element}</span>
                  })}
                </p>
              </Col>
              </Row>
              <Row className="justify-content-center">
                <BubbleSorting list={this.state.list}></BubbleSorting>
              </Row>
              <Row className="justify-content-center">
                <SelectionSorting list={this.state.list}></SelectionSorting>
              </Row>
              <Row className="justify-content-center">
                <InsertionSorting list={this.state.list}></InsertionSorting>
              </Row>
          </Container>
      </div>
    );
  }
}

export default App;
