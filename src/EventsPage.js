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
        var count = document.getElementById("formBasicGuestCount").value;
        var attending = document.getElementById("formBasicAttending").checked;
        console.log(attending)
        const postData = {
            name: name,
            email: email,
            count: count,
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
                <Row sm={1} md={2} >
                    <Col>
                        <h3>COVID19 Updates</h3>
                        <p> Never would we have thought to factor a global health pandemic into our wedding planning...yet here we are.  As it stands currently, we are still planning to have our wedding ceremonies the weekend of 10/09-10/10 but understand we may have to change our initial plans that included 200+ guests. As a guest to one of the most intimate moments of our lives where we plan to share the hopes & dreams of our future as well as connect our cultures, we consider you a part of our family and would never want to risk your health & safety. We always planned to have digital viewing options (Zoom & Facebook Live) to connect those celebrating from afar, so those options will be available to everyone. Should we have to postpone the larger celebration altogether, we will let you know as soon as we know our capabilities.  We will continue to closely monitor and adhere to CDC / local government guidelines, so please check back regularly for updates as we are eager to include you!</p>
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
                                    We'll only use your email to contact you with updates.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicGuestCount">
                                <Form.Label>Guest Count</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
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


