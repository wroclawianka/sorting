import React, { Component } from 'react';

interface State {
    result: Array<number>
}

interface Props {
    list: Array<number>
}

class BubbleSorting extends Component<Props, State> {
    public state : State;
    constructor(){
        super();
        this.state = {
            result : []
        }
    }

    componentWillMount() {
        this.useBubbleSorting()
    }

    useBubbleSorting(){
        var array : Array<number> = this.props.list;
        for(var j = 0; j < array.length; j++) {
            for(var i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]];
            }
        }
        this.setState({ result : array })
    }
}

    render() {
        return <div>
            <h2>Bubble Sorting</h2>
            {/* <p>{this.state.result}</p> */}
        </div>
    }
}

export default BubbleSorting;