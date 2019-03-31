import React, { Component } from 'react';
import './SelectionSorting.css';
import posed, { PoseGroup } from 'react-pose';
const Item = posed.li({});

interface State {
    result: Array<number>,
    steps: Array<Step>,
    items: Array<any>
}

interface Props {
    list: Array<number>
}

interface Step {
    label: string,
    array: Array<number>,
    accent: Array<number>
}
class SelectionSorting extends Component<Props, State> {
    public state: State;
    constructor() {
        super();
        this.state = {
            result: [],
            steps: [],
            items: []
        }
    }

    componentWillMount() {
        this.useSelectionSorting()
    }

    showSteps(i) {
        setTimeout(() => {
            this.setState({
                items: this.state.steps[i].array
            })
            i++;
            if (i < this.state.steps.length) {
                this.showSteps(i);
            }
        }, 1000);
    }

    useSelectionSorting() {
        let array: Array<number> = [...this.props.list];
        var startStep: Step = {
            label: "Start",
            array: [...array],
            accent: []
        };
        var steps: Array<Step> = [
            startStep
        ];
        for (var i = 0; i < array.length; i++) {
            let min = Math.min(...array.slice(i, array.length));
            let minIndex = array.indexOf(min);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            steps.push({
                label: `Step ${i + 1}`,
                array: [...array],
                accent: [i, minIndex]
            });
        }
        this.setState({
            result: array,
            steps: steps
        }, () => {this.showSteps(0)})
    }

    render() {
        return <div>
            <h2>Selection Sorting</h2>
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