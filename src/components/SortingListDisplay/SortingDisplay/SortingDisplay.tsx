import React, {Component} from 'react';
import posed, {PoseGroup} from 'react-pose';
import './SortingDisplay.css'

const Item = posed.li({});

interface State {
    items: Array<number>,
    stepsCounter: number,
    indexes: Array<number>
}

interface Props {
    name: string,
    result: Array<number>,
    steps: Array<any>,
    items: Array<number>,
    comparedElements: Array<Array<number>>,
}

class SortingDisplay extends Component<Props, State> {
    public state: State;

    constructor() {
        super();
        this.state = {
            items: [],
            stepsCounter: 0,
            indexes: [0, 1]
        }
    }

    componentWillMount() {
        this.showSteps(0)
    }

    showSteps(i) {
        setTimeout(() => {
            let indexes: Array<number> = [];
            this.props.comparedElements[i].forEach(el => {
                indexes.push(this.props.steps[i].indexOf(el));
            });
            this.setState({
                items: this.props.steps[i],
                stepsCounter: i,
                indexes: indexes
            })
            i++;
            if (i < this.props.steps.length) {
                this.showSteps(i);
            }
        }, 1000);
    }

    setAccent(item) {
        let i = this.state.stepsCounter;
        let index = this.props.steps[i].indexOf(item);
        let className = "item";
        this.state.indexes.forEach(el => {
            if (el === index) {
                className = className + " accented"
            }
        });
        return className
    }

    render() {
        return <div>
            <h2 className="font-weight-light mt-4">{this.props.name}</h2>
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

export default SortingDisplay;
