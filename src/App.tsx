import React, {Component} from 'react';
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
        const defaultList: Array<number> = [3, 6, 4, 5, 2, 1]; //[6, 10, 5, 14, 3, 13 9, 1, 17, 12, 15, 8, 2, 16, 11, 18, 4, 7];
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
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <BubbleSorting list={this.state.list}></BubbleSorting>
                    </Row>
                    {/*<Row className="justify-content-center">*/}
                    {/*    <SelectionSorting list={this.state.list}></SelectionSorting>*/}
                    {/*</Row>*/}
                    <Row className="justify-content-center">
                        <InsertionSorting list={this.state.list}></InsertionSorting>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
