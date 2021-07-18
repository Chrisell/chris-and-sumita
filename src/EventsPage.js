import React from 'react';
import Event from './Event.js'
import {Container, Row, Col} from 'react-bootstrap'
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
                <h3>Events &amp; Details</h3>
                <Row xs={1} sm={1} md={2} >
                    <Col>
                        <h4>10/01 | Vow Renewal @ PAFA </h4>
                        <p>This event will be an intimate evening we are choosing to share with our closest family &amp; friends who have helped us make it through this tough year. Due to venue limitations, this evening will be adults-only.</p>
                        <p>The dress code for this event will be Semi-Formal or Formal Indian Traditional. So women should wear long or cocktail dresses, pantsuits, or saris, while men should wear suit and tie or sherwanis. </p>
                        <h4>10/02 | Hindu Wedding Ceremony @ ICC</h4>
                        <p>This event will be a traditional Indian wedding, including a Baraat (or a celebratory wedding procession for the groom involving live music and dancing) followed by a Hindu Ceremony.</p>
                        <p>The evening will continue into a cocktail hour and dinner with an assortment of Indian Bengali music.</p>
                        <p>The dress code for this event will be Semi-Formal or Formal Indian Traditional. So women should wear saris, lehengas, cocktail dresses, or pantsuits, while men should wear sherwanis, kurta pyjama, or suit and tie. </p>
                    </Col>
                    <Col>
                        <h4>Hotel</h4>
                        <p>Details include hotel wedding blocks (Voorhees and Philly options) and possible transportation offerings (lyft code or charter group travel from Voorhees hotel to PAFA if budget allows)</p>

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


