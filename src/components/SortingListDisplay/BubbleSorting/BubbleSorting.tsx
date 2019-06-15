import React, {Component} from 'react';
import SortingDisplay from '../SortingDisplay/SortingDisplay';

interface State {
    result: Array<number>,
    steps: Array<any>,
    items: Array<number>,
    comparedElements: Array<Array<number>>,
}

interface Props {
    list: Array<number>
}

class BubbleSorting extends Component<Props, State> {
    state: State;

    constructor() {
        super();
        this.state = {
            result: [],
            steps: [],
            items: [],
            comparedElements: []
        }
    }

    componentWillMount() {
        this.sort()
    }

    sort() {
        const array: Array<number> = [...this.props.list];
        let steps = [[...array]];
        let sortedArray = [...array].sort();
        let comparedElements: Array<Array<number>> = [[0, 0]];
        for (let j = 0; j < array.length; j++) {
            for (let i = 0; i < array.length - 1; i++) {
                if (JSON.stringify(array) !== JSON.stringify(sortedArray)) {
                    comparedElements.push([array[i], array[i + 1]]);
                    if (array[i] > array[i + 1]) {
                        [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    }
                    steps.push([...array]);
                }
            }
            comparedElements.pop();
            comparedElements.push([-1, -1]);
            this.setState({
                result: array,
                steps: steps,
                comparedElements: comparedElements
            })
        }
    }

    render() {
        return <SortingDisplay
            name={"Bubble Sorting"}
            result={this.state.result}
            steps={this.state.steps}
            items={this.state.items}
            comparedElements={this.state.comparedElements}
        />
    }
}

export default BubbleSorting;