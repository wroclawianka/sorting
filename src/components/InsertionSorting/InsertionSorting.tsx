import React, {Component} from 'react';
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
        this.useInsertionSorting()
    }

    useInsertionSorting() {
        var array: Array<number> = [...this.props.list];
        var steps = [[...array]];
        let comparedElements : Array<Array<number>> = [[0,0]];
        for (var i = 0; i < array.length; i++) {
            for (var j = 1; j < array.length; j++) {
                for (var x = j; x > i; x--) {
                    if (array[i] > array[x]) {
                        comparedElements.push([array[i],array[x]]);
                        var value = array[x];
                        var index = array.indexOf(array[x]);
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