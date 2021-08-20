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
                <h1>Events &amp; Details</h1>
                <Row xs={1} sm={1} md={2} >
                    <Col>
                        <h4>10/01 | Party @ PAFA</h4>
                        <p><b>Pennsylvania Academy of the Fine Arts</b><br />118-128 N Broad Street <br />Philadelphia, PA 19102</p>
                        <ul>
                            <li>Cocktail Hour: 6:00pm</li>
                            <li>Wedding Toast: 6:45pm</li>
                            <li>Dinner &amp; Dancing: 7:30pm</li>
                        </ul>
                        <p>This event will be an intimate evening we are choosing to share with our closest family &amp; friends who have helped us make it through this tough year. Due to venue space constraints, we respectfully request this evening be adults-only. Thank you for your understanding.</p>
                        <p>The dress code for this event will be Formal or Formal Indian Traditional. So attire would include long or cocktail dresses, pantsuits, saris, suit and tie or sherwanis. </p>
                        <h4>10/02 | Hindu Wedding Ceremony @ ICC</h4>
                        <p><b>Indian Cultural Center of South Jersey</b><br />820 NJ-73<br />Marlton, NJ 08053</p>
                        <ul>
                            <li>Baraat: 3:30pm</li>
                            <li>Ceremony: 4:00pm</li>
                            <li>Cocktail Hour: 5:30pm</li>
                            <li>Dinner &amp; Dancing: 7:00pm</li>
                            <li>Dessert Surprise: 8:00pm</li>
                        </ul>
                        <p>This event will be a traditional Indian wedding, including a Baraat (or a celebratory wedding procession for the groom involving live music and dancing) followed by a Hindu Ceremony. The evening will continue into an extended cocktail hour, dinner,  with dancing and a fun dessert surprise for kids of all ages at the end of the night.</p>
                        <p>The dress code for this event will be Formal or Formal Indian Traditional. So attire traditionally for women would include wear saris, lehengas, cocktail or long dresses, or pantsuits, while attire traditionally for men include sherwanis, kurta pyjama, or suit and tie. </p>
                        <p>As we know some of our family may not be familiar with where to shop for traditional Indian clothing but want to participate in the tradition, we’ve put together some options below.</p>
                        <p>If you’re local to the tri-state area and want to try on clothing in person, we’d recommend going to the Indian clothing stores in Edison or Iselin, New Jersey. There are a variety of prices and options for you to choose from for same day purchase.</p>
                        <p>There are many websites that have ready to ship options (such as <a href="https://g3fashion.com/en-us" target="_blank" rel="noopener noreferrer">G3 Fashion</a>, <a href="https://www.kalkifashion.com/" target="_blank" rel="noopener noreferrer">Kalki Fashion</a>, or <a href="https://www.azafashions.com/" target="_blank" rel="noopener noreferrer">Aza Fashion</a>) or Etsy and Amazon give you flexibility too. For those newer to Indian fashion, women should try lenghas or lehenga, salwar kameez (longer tunic with pants) and pre-pleated saris as they are easier to put on than a traditional sari. Men’s options would be kurta sets or sherawanis, which both consist of a longer tunic with a drawstring pants.</p>
                    </Col>
                    <Col>
                        <h4>Available Hotels for the Events</h4>
                        <p>We have room blocks in both locations of the weekend's events</p>
                        <p><b>Le Meridian</b><br />1421 Arch Street<br />Philadelphia, Pennsylvania 19102<br />215.422.8200<br/>$145/night</p>
                            <p>The Le Meridian is around the corner from our Friday Event venue, the Pennsylvania Academy of Fine Arts (PAFA).<br/>
                            Rooms are available in single King or 2 Double room options.<br/></p>
                        <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1625239785180&key=GRP&app=resvlink" target="blank">Ell Party Room Block at Le Meridian</a></p>
                        <p><b>Crowne Plaza</b><br />2349 NJ-70<br />, Cherry Hill, New Jersey<br />856.782.2555<br/> $119/night</p>
                        <p>The Crowne Plaza is a 20-minute drive to our Saturday Event venue, The Indian Cultural Center of South Jersey and includes free parking.<br/>
                            Rooms are available in single King or 2 Queen room options.</p>
                        <p>(856) 665-6666 - Routh Ell Wedding Room Block</a></p>
                        <p><b>Spinghill Suites</b><br />1031 Voorhees Drive<br />Voorhees Township, New Jersey<br />856.782.2555<br/> $159/night</p>
                        <p>The Springhill Suites is a 10-minute drive to our Saturday Event venue, The Indian Cultural Center of South Jersey and includes free parking.<br/>
                            Rooms are available in single King or 2 Queen room options.</p>
                        <p><a href="https://bit.ly/3i1cFlwRouthEllWedding" target="blank">Ell Party Room Block at Springhill Suites</a></p>

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


