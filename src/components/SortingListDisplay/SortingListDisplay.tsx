import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import BubbleSorting from './BubbleSorting/BubbleSorting';
import SelectionSorting from './/SelectionSorting/SelectionSorting';
import InsertionSorting from './InsertionSorting/InsertionSorting';

interface State {
}

interface Props {
    list: Array<number>,
    algorithms: Array<algorithm>
}

interface algorithm {
    label: string,
    value: Object
}

class SortingListDisplay extends Component<Props, State> {
    selectComponent = (option) => {
        switch (option) {
            case 'bubble':
                return <BubbleSorting list={this.props.list}/>;
            case 'insertion':
                return <InsertionSorting list={this.props.list}/>;
            case 'selection':
                return <SelectionSorting list={this.props.list}/>;
            default:
                return;
        }
    };

    render() {
        return <div>
            {this.props.algorithms.map((algorithm) => {
                return (<Row key={algorithm.label} className="justify-content-center">
                    {this.selectComponent(algorithm.value)}
                </Row>)
            })}
        </div>
    }
}

export default SortingListDisplay;
