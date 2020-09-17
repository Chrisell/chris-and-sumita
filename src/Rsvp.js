import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import './About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Rsvp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            title: this.props.title,
            attending: "true"
        }
        this.onAttendingChanged = this.onAttendingChanged.bind(this);
        this.signupSubmit = this.signupSubmit.bind(this);
    }
    onAttendingChanged(e) {
        this.setState({
            attending: e.currentTarget.value
        })
    }
    signupSubmit(event) {
        event.preventDefault();
        var name = document.getElementById("formBasicName").value;
        var email = document.getElementById("formBasicEmail").value;
        var count = document.getElementById("formBasicGuestCount").value;
        var attending = this.state.attending;
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
                <Row xs={1} sm={1} md={1} >
                    <p>Thank you for being a part of our vow exchange ceremony. We are sharing this event with our closest family &amp; friends, so we appreciate your support on what will be a memorable evening during an even more memorable year.</p>
                    <p>The event will be taking place outside at Sumita's parents home. Please attend in cocktail attire and shoes appropriate for grass.</p>
                    <ul>
                        <li>4:00 - Guests Arrive</li>
                        <li>4:30 - Ceremony</li>
                        <li>5:15 - Cocktail Hour</li>
                        <li>6:15 - Speeches</li>
                        <li>6:30 - Dinner</li>
                        <li>7:30 - Dessert</li>
                    </ul>
                </Row>
                <Row xs={1} sm={1} md={2} >
                    <Col>
                        <p>As excited as we are to share this experience together, we understand we are in the midst of a pandemic. To ensure everyone’s safety, we will be having this event outdoors and seating families or those regularly interacting together at tables with ample room between to maintain social distancing guidelines.</p>
                        <p>We are also asking everyone attending to have a COVID-19 test done at least a week prior to our event while requesting you maintain social distancing guidelines for two weeks leading up to the event. We truly appreciate your understanding during this strange time as we adjust to new safety guidance on an ever-changing basis and believe this is a necessary precaution to take to further ensure everyone’s safety.</p>
                        <p>We are also offering a virtual viewing option for this ceremony for those unable to attend in person or do not feel comfortable being tested at this time, as well as look forward to our larger celebration (&amp; full dance floor!) in 2021. </p>

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
                                    We'll use your email to send you updates.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicGuestCount">
                                <Form.Label>Guest Count</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group controlId="formBasicAttending">
                                <Form.Check type="radio" checked={this.state.attending === "true"} value="true" label="Will attend after being tested for COVID-19" onChange={this.onAttendingChanged}></Form.Check>
                            </Form.Group>
                            <Form.Group controlId="formBasicNotAttending">
                                <Form.Check type="radio" checked={this.state.attending === "false"} value="false" label="Will celebrate from afar" onChange={this.onAttendingChanged}></Form.Check>
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
        )
    }
}

export default Rsvp;
