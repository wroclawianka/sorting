import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
const Item = posed.li({});

interface State {
    result: Array<number>,
    steps: Array<any>,
    items: Array<number>,
    stepsCounter: number
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
            stepsCounter: 0
        }
    }

    componentWillMount() {
        this.useSelectionSorting()
    }

    showSteps(i) {
        setTimeout(() => {
            this.setState({
                items: this.state.steps[i],
                stepsCounter: i
            })
            i++;
            if (i < this.state.steps.length) {
                this.showSteps(i);
            }
        }, 1000);
    }

    useSelectionSorting() {
        let array: Array<number> = [...this.props.list];
        var steps = [[...array]];
        for (var i = 0; i < array.length; i++) {
            let min = Math.min(...array.slice(i, array.length));
            let minIndex = array.indexOf(min);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            steps.push([...array]);
        }
        this.setState({
            result: array,
            steps: steps
        }, () => {this.showSteps(0)})
    }

    render() {
        return <div>
            <h2 className="font-weight-light mt-4">Selection Sorting</h2>
            <span className="counter">{this.state.stepsCounter}</span>
            <ul>
                <PoseGroup>
                    {this.state.items.map(item =>
                        <Item key={item} className="item">
                            <span>{item}</span>
                        </Item>
                    )}
                </PoseGroup>
            </ul>
        </div>
    }
}

export default SelectionSorting;