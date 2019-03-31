import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
const Item = posed.li({});

interface State {
    result: Array<number>,
    steps: Array<any>,
    items: Array<number>
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
            steps: [],
            items: []
        }
    }

    showSteps(i) {
        setTimeout(() => {
            this.setState({
                items: this.state.steps[i]
            })
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
            }, () => { this.showSteps(0) })
        }
    }

    render() {
        return <div>
            <h2 className="font-weight-light mt-4">Bubble Sorting</h2>
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