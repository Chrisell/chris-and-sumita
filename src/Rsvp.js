import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import './About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Rsvp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <Container>
                <h2>{this.state.title}</h2>
            </Container>
        )
    }
}

export default Rsvp;
