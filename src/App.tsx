import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from "./components/Header/Header";
import UserPanel from "./components/UserPanel/UserPanel";
import SortingListDisplay from "./components/SortingListDisplay/SortingListDisplay";
import Algorithm from './interfaces/Algoritm'

const algorithms = [
    {value: 'bubble', label: 'Bubble'},
    {value: 'insertion', label: 'Insertion'},
    {value: 'selection', label: 'Selection'},
];

interface State {
    list: Array<number>;
    display: boolean;
    selectedAlgorithms: Array<Algorithm>;
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
                    <UserPanel selectAlgorithms={this.selectAlgorithms}
                               selectedAlgorithms={this.state.selectedAlgorithms}
                               algorithms={algorithms}
                               display={this.state.display}
                               decreaseLength={this.decreaseLength}
                               increaseLength={this.increaseLength}
                               length={this.state.length}
                               displayVisualization={this.displayVisualization}/>
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
