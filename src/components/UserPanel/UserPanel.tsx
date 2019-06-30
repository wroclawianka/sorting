import React, {Component} from 'react';
import AlgorithmsSelector from "./AlgorithmsSelector/AlgorithmsSelector";
import LengthSelector from "./LengthSelector/LengthSelector";
import StartButton from "./StartButton/StartButton";
import Row from "react-bootstrap/Row";
import Algorithm from '../../interfaces/Algoritm'
import './UserPanel.css'

interface State {
}

interface Props {
    selectAlgorithms;
    selectedAlgorithms: Array<Algorithm>;
    algorithms: Array<Algorithm>
    display: boolean,
    decreaseLength;
    increaseLength;
    length: number
    displayVisualization;
}

class UserPanel extends Component<Props, State> {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return <Row className="justify-content-center">
            <div className="user-panel">
                <AlgorithmsSelector
                    selectedAlgorithms={this.props.selectedAlgorithms}
                    selectAlgorithms={this.props.selectAlgorithms}
                    algorithms={this.props.algorithms}
                    display={this.props.display}
                />
                <LengthSelector
                    decreaseLength={this.props.decreaseLength}
                    increaseLength={this.props.increaseLength}
                    display={this.props.display}
                    length={this.props.length}
                />
                <div className="buttons">
                    {this.props.selectedAlgorithms === null ?
                        null :
                        <StartButton
                            display={this.props.display}
                            displayVisualization={this.props.displayVisualization}
                        />
                    }
                </div>
            </div>
        </Row>
    }
}

export default UserPanel;
