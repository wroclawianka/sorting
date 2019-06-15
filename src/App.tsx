import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SortingListDisplay from "./components/SortingListDisplay/SortingListDisplay";

interface State {
    list: Array<number>;
    display: boolean;
}

interface Props {
}

class App extends Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            list: [],
            display: false
        }
    }

    componentWillMount() {
        this.getDefaultList();
    }

    getDefaultList() {
        const defaultList: Array<number> = [6, 10, 5, 14, 3, 13, 9, 1, 17, 12, 15, 8, 2, 16, 11, 18, 4, 7];
        this.setState({
            list: defaultList
        });
    }

    displayVisualization = () => {
        this.setState({
            display: !this.state.display
        })
    };

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
                        <button
                            type="button"
                            className="btn btn-light btn-lg start-button" onClick={this.displayVisualization}>Start</button>
                    </Row>
                    {this.state.display ?
                        <SortingListDisplay list ={this.state.list}></SortingListDisplay>
                        : null}
                </Container>
            </div>
        );
    }
}

export default App;
