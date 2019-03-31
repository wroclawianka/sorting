import React, { Component } from 'react';

interface State {
    result: Array<number>,
    steps:  Array<any>
}

interface Props {
    list: Array<number>
}

class SelectionSorting extends Component<Props, State> {
    public state : State;
    constructor(){
        super();
        this.state = {
            result : [],
            steps : []
        }
    }

    componentWillMount() {
        this.useSelectionSorting()
    }

    useSelectionSorting(){
        var array : Array<number> = this.props.list;
        var steps = [ [...array] ];
        for(var i = 0; i < array.length; i++){
            let min = Math.min(...array.slice(i, array.length));
            let minIndex = array.indexOf(min);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            steps.push([...array])
        }
        this.setState({ 
            result : array,
            steps : steps
        })
}

    render() {
        return <div>
            <h2>Selection Sorting</h2>
            <ul>
                {this.state.steps.map(function(step : []){
                    return <li>{step}</li>;
                  })}
            </ul>
        </div>
    }
}

export default SelectionSorting;