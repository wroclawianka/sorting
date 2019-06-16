import React, {Component} from 'react';

interface State {
}

interface Props {
    display: boolean,
    displayVisualization;
}

class StartButton extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return <button
            type="button"
            className="btn btn-light btn-lg start-button" onClick={this.props.displayVisualization}>
            {this.props.display ? "Stop" : "Start"}
        </button>
    }
}

export default StartButton;
