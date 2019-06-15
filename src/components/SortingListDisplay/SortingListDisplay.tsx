import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import BubbleSorting from './BubbleSorting/BubbleSorting';
import SelectionSorting from './/SelectionSorting/SelectionSorting';
import InsertionSorting from './InsertionSorting/InsertionSorting';

interface State {
}

interface Props {
    list: Array<number>
}

class SortingListDisplay extends Component<Props, State> {

    render() {
        return <div>
            <Row className="justify-content-center">
                <BubbleSorting list={this.props.list}/>
            </Row>
            <Row className="justify-content-center">
                <SelectionSorting list={this.props.list}/>
            </Row>
            <Row className="justify-content-center">
                <InsertionSorting list={this.props.list}/>
            </Row>
        </div>
    }
}

export default SortingListDisplay;
