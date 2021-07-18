import React from 'react';
import { Container, Row} from 'react-bootstrap'
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
                    <p>We cannot wait to finELLy celebrate with you! As this event is highly anticipated, we wanted to ensure everyone feels safe by requiring all guests over the age of 12 to be vaccinated with an approved COVID-19 vaccine or provide negative PCR test results within 48 hours of the events - which will be confirmed by the event staff. We appreciate you taking the time to support us and our guests to create a safer space to celebrate our marriage.</p>
                    <p>You can RSVP for our events by visiting <a href=" https://www.theknot.com/us/sumita-routh-and-chris-ell-oct-2021/rsvp" target="_blank">this link</a>. The password is <b>finELLy</b>.</p>
                </Row>
            </Container>
        )
    }
}

export default Rsvp;
