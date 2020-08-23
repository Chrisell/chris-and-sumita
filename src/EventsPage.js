import React from 'react';
import Event from './Event.js'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
//import Form from './Form.js'
import './Page.css'

class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            title: this.props.title,
            details: {}
        }
        this.updateDetails = this.updateDetails.bind(this);
        this.signupSubmit = this.signupSubmit.bind(this);
    }
    updateDetails(value) {
        this.setState({ details: value })
    }
    signupSubmit(event) {
        event.preventDefault();
        var name = document.getElementById("formBasicName").value;
        var email = document.getElementById("formBasicEmail").value;
        // var count = document.getElementById("formBasicGuestCount").value;
        var attending = document.getElementById("formBasicAttending").checked;
        console.log(attending)
        const postData = {
            name: name,
            email: email,
            count: "n/a",
            attending: attending
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        }
        fetch('https://4qy0oqgung.execute-api.us-east-1.amazonaws.com/prod/wedding-signup', requestOptions)
            .then(response => response.json())
            .then(data => 
                console.log(data),
                this.setState({done: true})
            );
    }
    render() {
        return (
            <Container>
                <Row xs={1} sm={1} md={2} >
                    <Col>
                        <h3>COVID19 Updates</h3>
                        <p>Never would we have thought to factor a global health pandemic into our wedding planning...yet here we are. We have decided to hold an intimate vow exchange on our original wedding date of 10/10/2020, but plan to have a larger celebration in the Fall of 2021 when it is safer for everyone to gather. We appreciate your understanding during these unprecedented times &amp; look forward to your support when we are able to celebrate together!</p>
                    </Col>
                    <Col>
                        <h3>RSVP Signup</h3>
                        {!this.state.done && (<Form onSubmit={this.signupSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Your Name"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll use your email to send you with updates.
                                </Form.Text>
                            </Form.Group>
                            {/* <Form.Group controlId="formBasicGuestCount">
                                <Form.Label>Guest Count (estimate)</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group> */}
                            <Form.Group controlId="formBasicAttending">
                                <Form.Check type="checkbox" label="Expecting to attend"></Form.Check>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>)}
                        {this.state.done && (
                            <p>Thank you for RSVPing! We'll be sending out updates as soon as we know details about the changes in the event.</p>
                        )}
                    </Col>
                </Row>
            </Container>                
                            
            // Object.keys(this.state.details).length == 0 ?
            //     <Form updateDetails={this.updateDetails}></Form>
            // : 
            //     <div className="events">
            //     { this.renderEvents() }
            //     </div>
            
        )
    }
    renderEvents() {
        var events = []
        for (const [key, value] of Object.entries(this.state.details)) {
          events.push(<Event key={key} event={value}></Event>);
        }
        console.log(events)
        return events;
    }
}

export default EventPage;


