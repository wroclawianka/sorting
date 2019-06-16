import React, {Component} from 'react';
import Select from 'react-select';
import algorithm from '../../../interfaces/algoritm'

interface State {
}

interface Props {
    selectAlgorithms;
    selectedAlgorithms: Array<algorithm>;
    algorithms: Array<algorithm>
    display: boolean
}

class AlgorithmsSelector extends Component<Props, State> {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return <div className="algorithms-selector">
            <label>Algorithms to visualize</label>
            <Select
                value={this.props.selectedAlgorithms}
                onChange={this.props.selectAlgorithms}
                options={this.props.algorithms}
                isMulti={true}
                placeholder={"Select algorithms to display"}
                isDisabled={this.props.display}
            />
        </div>
    }
}

export default AlgorithmsSelector;
