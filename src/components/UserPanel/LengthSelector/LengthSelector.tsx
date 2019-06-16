import React, {Component} from 'react';
import './LengthSelector.css'

interface State {
}

interface Props {
    decreaseLength;
    increaseLength;
    display: boolean
    length: number
}

class LengthSelector extends Component<Props, State> {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return <div className="length-selector">
            <label>Length of the array</label>
            <div className="def-number-input number-input">
                <button onClick={this.props.decreaseLength} className="minus"
                        disabled={this.props.display}/>
                <input className="quantity" name="quantity" value={this.props.length}
                       onChange={() => console.log('change')}
                       type="number"/>
                <button onClick={this.props.increaseLength} className="plus"
                        disabled={this.props.display}/>
            </div>
        </div>
    }
}

export default LengthSelector;
