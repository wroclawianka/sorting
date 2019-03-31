import React, { Component } from 'react';

interface State {
    result: Array<number>,
    steps: Array<any>
}

interface Props {
    list: Array<number>
}

class InserstionSorting extends Component<Props, State> {
    public state: State;
    constructor() {
        super();
        this.state = {
            result: [],
            steps: []
        }
    }

    componentWillMount() {
        this.useInsertionSorting()
    }

    useInsertionSorting() {
        var array: Array<number> = [...this.props.list];
        var steps = [[...array]];

        for (var i = 0; i < array.length; i++) {
            for (var j = 1; j < array.length; j++) {
                for (var x = j; x > i; x--) {
                    if (array[i] > array[x]) {
                        var value = array[x];
                        var index = array.indexOf(array[x]);
                        array.splice(index, 1);
                        array.splice(i, 0, value);
                        steps.push([...array])
                    }
                }
            }
        }
        this.setState({
            result: array,
            steps: steps
        })
    }

    render() {
        return <div>
            <h2>Insertion Sorting</h2>
            <ul>
                {this.state.steps.map(function (step: []) {
                    return <li>{step}</li>;
                })}
            </ul>
        </div>
    }
}

export default InserstionSorting;