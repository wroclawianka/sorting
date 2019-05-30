import React, { Component } from 'react';
import SortingDisplay from "../SortingDisplay/SortingDisplay";

interface State {
    result: Array<number>,
    steps: Array<any>,
    items: Array<number>,
    comparedElements: Array<Array<number>>,
}

interface Props {
    list: Array<number>
}

class SelectionSorting extends Component<Props, State> {
    public state: State;
    constructor() {
        super();
        this.state = {
            result: [],
            steps: [],
            items: [],
            comparedElements : [],
        }
    }

    componentWillMount() {
        this.useSelectionSorting()
    }

    useSelectionSorting() {
        let array: Array<number> = [...this.props.list];
        let steps = [[...array]];
        let comparedElements: Array<Array<number>> = [[0, 0]];
        for (let i = 0; i < array.length; i++) {
            let min = Math.min(...array.slice(i, array.length));
            let minIndex = array.indexOf(min);
            comparedElements.push([array[i], array[minIndex]]);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            steps.push([...array]);
        }
        comparedElements.pop();
        comparedElements.push([-1, -1]);
        this.setState({
            result: array,
            steps: steps,
            comparedElements: comparedElements
        })
    }

    render() {
        return <SortingDisplay
            name={"Selection Sorting"}
            result={this.state.result}
            steps={this.state.steps}
            items={this.state.items}
            comparedElements={this.state.comparedElements}
        />
    }
}

export default SelectionSorting;