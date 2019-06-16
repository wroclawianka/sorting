import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "./components/Header/Header";
import AlgorithmsSelector from "./components/UserPanel/AlgorithmsSelector";
import LengthSelector from "./components/UserPanel/LengthSelector";
import StartButton from "./components/UserPanel/StartButton";
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
        let list: Array<number> = [];
        for (let i = 1; i <= this.state.length; i++) {
            list.push(i);
        }
        return list.sort(() => 0.5 - Math.random());
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
                    <Header/>
                    <Row className="justify-content-center">
                        <div className="user-panel">
                            <AlgorithmsSelector
                                selectedAlgorithms={this.state.selectedAlgorithms}
                                selectAlgorithms={this.selectAlgorithms}
                                algorithms={algorithms}
                                display={this.state.display}
                            />
                            <LengthSelector
                                decreaseLength={this.decreaseLength}
                                increaseLength={this.increaseLength}
                                display={this.state.display}
                                length={this.state.length}
                            />
                            <div className="buttons">
                                {this.state.selectedAlgorithms === null ?
                                    null :
                                    <StartButton
                                        display={this.state.display}
                                        displayVisualization={this.displayVisualization}
                                    />
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
        )
            ;
    }
}

export default App;
