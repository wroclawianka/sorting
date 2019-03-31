import React, { Component } from 'react';

interface State {
    result: Array<number>,
    steps: Array<any>
}

interface Props {
    list: Array<number>
}

class BubbleSorting extends Component<Props, State> {
    public state: State;
    constructor() {
        super();
        this.state = {
            result: [],
            steps: []
        }
    }

    componentWillMount() {
        this.useBubbleSorting()
    }

    useBubbleSorting() {
        var array: Array<number> = this.props.list;
        var steps = [[...array]];
        for (var j = 0; j < array.length; j++) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] > array[i + 1]) {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                }
                steps.push([...array])
            }
            this.setState({
                result: array,
                steps: steps
            })
        }
    }

    render() {
        return <div>
            <h2>Bubble Sorting</h2>
            <ul>
                {this.state.steps.map(function (step: []) {
                    return <li>{step}</li>;
                })}
            </ul>
        </div>
    }
}

export default BubbleSorting;