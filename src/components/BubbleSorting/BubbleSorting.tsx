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

class BubbleSorting extends Component<Props, State> {
    state: State;
    constructor() {
        super();
        this.state = {
            result: [],
            steps: [],
            items: [],
            stepsCounter: 0
        }
    }

    showSteps(i) {
        setTimeout(() => {
            this.setState({
                items: this.state.steps[i],
                stepsCounter: i
            });
            i++;
            if (i < this.state.steps.length) {
                this.showSteps(i);
            }
        }, 1000);
    }

    componentWillMount() {
        this.useBubbleSorting()
    }

    useBubbleSorting() {
        var array: Array<number> = [...this.props.list];
        var steps = [[...array]];
        var sortedArray = [...array].sort();
        for (var j = 0; j < array.length; j++) {
            for (var i = 0; i < array.length; i++) {
                if(JSON.stringify(array) !== JSON.stringify(sortedArray)){
                    if (array[i] > array[i + 1]) {
                        [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    }
                    steps.push([...array]);
               }
            }
            this.setState({
                result: array,
                steps: steps
            }, () => { this.showSteps(0) })
        }
    }

    render() {
        return <div>
            <h2 className="font-weight-light mt-4">Bubble Sorting {this.state.stepsCounter}</h2>
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

export default BubbleSorting;