import React, { Component } from 'react';

interface Props {
    list: Array<number>
}

class BubbleSorting extends Component<Props> {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return <div>
            <h2>Bubble Sorting</h2>
        </div>
    }
}

export default BubbleSorting;
