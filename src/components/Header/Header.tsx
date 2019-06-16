import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

interface State {
    header: string
}

interface Props {
}

class Header extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            header: "Sorting Algorithms"
        }
    }

    render() {
        return <Row className="justify-content-center">
            <Col className="col-md-7">
                <h1 className="font-weight-light mt-4">{this.state.header}</h1>
            </Col>
        </Row>
    }
}

export default Header;
