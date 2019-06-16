import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import SortingListDisplay from "./components/SortingListDisplay/SortingListDisplay";

const algorithms = [
    {value: 'bubble', label: 'Bubble'},
    {value: 'insertion', label: 'Insertion'},
    {value: 'selection', label: 'Selection'},
];

interface algorithm {
    label: string,
    value: Object
}

interface State {
    list: Array<number>;
    display: boolean;
    selectedAlgorithms: Array<algorithm>;
    length: number
}

interface Props {
}

class App extends Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            list: [],
            display: false,
            selectedAlgorithms: [],
            length: 18
        }
    }

    componentWillMount() {
        this.setState({
            selectedAlgorithms: algorithms.slice(0, 3)
        });
    }

    getList = () => {
        let defaultList: Array<number> = [];
        for (let i = 1; i <= this.state.length; i++) {
            defaultList.push(i);
        }
        return defaultList.sort(() => 0.5 - Math.random());
    };

    displayVisualization = () => {
        this.setState({
            display: !this.state.display,
            list: this.getList()
        });

    };

    selectAlgorithms = (selectedAlgorithms) => {
        this.setState({selectedAlgorithms});
    };

    decreaseLength = () => {
        this.setState({length: this.state.length - 1});
    };

    increaseLength = () => {
        this.setState({length: this.state.length + 1});
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
                        <div className="user-panel">
                            <div className="algorithms-selector">
                                <label>Algorithms to visualize</label>
                                <Select
                                    value={this.state.selectedAlgorithms}
                                    onChange={this.selectAlgorithms}
                                    options={algorithms}
                                    isMulti={true}
                                    placeholder={"Select algorithms to display"}
                                    isDisabled={this.state.display}
                                />
                            </div>
                            <div className="length-selector">
                                <label>Length of the array</label>
                                <div className="def-number-input number-input">
                                    <button onClick={this.decreaseLength} className="minus" disabled={this.state.display}/>
                                    <input className="quantity" name="quantity" value={this.state.length}
                                           onChange={() => console.log('change')}
                                           type="number"/>
                                    <button onClick={this.increaseLength} className="plus" disabled={this.state.display}/>
                                </div>
                            </div>
                            <div className="buttons">
                                {this.state.selectedAlgorithms === null ?
                                    null :

                                    <button
                                        type="button"
                                        className="btn btn-light btn-lg start-button" onClick={this.displayVisualization}>
                                        {this.state.display ? "Stop" : "Start"}
                                    </button>
                                }
                            </div>
                        </div>
                    </Row>
                    {this.state.display ?
                        <SortingListDisplay
                            list={this.state.list}
                            algorithms={this.state.selectedAlgorithms}
                        />
                        : null}
                </Container>
            </div>
        );
    }
}

export default App;
