import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
const Item = posed.li({});

interface State {
    result: Array<number>,
    steps: Array<any>,
    items: Array<number>,
    stepsCounter: number,
    comparedElements : Array<Array<number>>,
    indexes : Array<number>
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
            stepsCounter: 0,
            comparedElements : [],
            indexes : [0, 1]
        }
    }

    componentWillMount() {
        this.useSelectionSorting()
    }

    showSteps(i) {
        setTimeout(() => {
            let indexes : Array<number> = [];
            this.state.comparedElements[i].forEach(el => {
                indexes.push(this.state.steps[i].indexOf(el));
            });
            this.setState({
                items: this.state.steps[i],
                stepsCounter: i,
                indexes: indexes
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
        let comparedElements : Array<Array<number>> = [[0,0]];
        for (var i = 0; i < array.length; i++) {
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
        }, () => {this.showSteps(0)})
    }

    setAccent(item) {
        let i = this.state.stepsCounter;
        let index = this.state.steps[i].indexOf(item);
        let className = "item";
        this.state.indexes.forEach(el => {
            if(el === index) {
                className = className + " accented"
            }
        });
        return className
    }

    render() {
        return <div>
            <h2 className="font-weight-light mt-4">Selection Sorting</h2>
            <span className="counter">{this.state.stepsCounter}</span>
            <ul>
                <PoseGroup>
                    {this.state.items.map(item =>
                        <Item key={item} className={this.setAccent(item)}>
                            <span>{item}</span>
                        </Item>
                    )}
                </PoseGroup>
            </ul>
        </div>
    }
}

export default SelectionSorting;