import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
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
                <Row xs={1} sm={1} md={2} >
                    <Col>
                        <p>Thank you for being a part of our vow exchange ceremony. We are sharing this event with our closest family &amp; friends, so we appreciate your support on what will be a memorable evening during an even more memorable year.</p>
                        <ul>
                            <li>4:00 - Guests Arrive</li>
                            <li>4:30 - 5:15 - Ceremony Starts</li>
                            <li>5:15 - 6:15 - Cocktail Hour</li>
                            <li>6:15 - 7:15 - Dinner</li>
                            <li>7:15 - 7:30 - Speeches</li>
                            <li>7:30 - Dessert</li>
                        </ul>
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
                                    We'll use your email to send you with updates.
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
        )
    }
}

export default Rsvp;
