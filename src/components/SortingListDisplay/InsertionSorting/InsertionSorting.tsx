import React, {Component} from 'react';
import SortingDisplay from "../SortingDisplay/SortingDisplay";
// @ts-ignore
import State from '../interfaces/State'

interface Props {
    list: Array<number>
}

class IntersectionSorting extends Component<Props, State> {
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
        this.sort()
    }

    sort() {
        let array: Array<number> = [...this.props.list];
        let steps = [[...array]];
        let comparedElements : Array<Array<number>> = [[0,0]];
        for (let i = 0; i < array.length; i++) {
            for (let j = 1; j < array.length; j++) {
                for (let x = j; x > i; x--) {
                    if (array[i] > array[x]) {
                        comparedElements.push([array[i],array[x]]);
                        let value = array[x];
                        let index = array.indexOf(array[x]);
                        array.splice(index, 1);
                        array.splice(i, 0, value);
                        steps.push([...array])
                    }
                }
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

    render() {
        return <SortingDisplay
            name={"Intersection Sorting"}
            result={this.state.result}
            steps={this.state.steps}
            items={this.state.items}
            comparedElements={this.state.comparedElements}
        />
    }
}

export default IntersectionSorting;
