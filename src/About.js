import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import './About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <Container>
                <h1>{this.state.title}</h1>
                <Row xs={1} sm={1} md={2} >
                    <Col>
                        <h3>How We Met</h3>
                        <p>It was during the Junior Seminar From Fiction to Film that we initially connected in 2010, but Sumita liking a Facebook article on Chris' wall about Correlation &amp; Causality is what brought us together again years later. After 6 months of only communicating on Facebook Messenger as old classmates, and a few friend dates where we bonded over our love of 30 Rock, we tried to go on our first real date: the Manayunk Food Truck Festival.</p>
                        <p>What seemed like a fun idea to try the best food trucks Philly had to offer quickly became annoying as Sumita was hangry (hungry &amp; angry) and the lines were endless. Chris suggested leaving the scene and checking out Chipotle to ease Sumita's hunger pains, which did just the trick!</p>
                    </Col>
                <Col>
                        <h3>How Chris Proposed</h3>
                        <p>Our proposal story is a bittersweet one. Chris had been wanting to propose for some time, but wanted to make sure to do it in a way that was memorable and special to Sumita. It took a while to think of something that would fit this tall order but eventually he came up with an idea.</p>
                        <p>Knowing that Sumita had been to Charleston for a bachelorette weekend where she hadn't gotten to do some of the less bachelorette-y things, Chris decided to book a hotel and flights to the city. He planned out dinners and dates, spa days, and nothing-days. It was all set until Mother Nature decided to have her way. Hurricane Dorian came along and forced a mandatory evacuation of Charleston just days before our flight was set. The flights and hotel had to be canceled and the first proposal attempt was thwarted.</p>
                        <p>The second attempt to propose was a much more difficult turn of events. Sumita had mentioned a day spa just outside New York City that had a small hotel attached to it. We scheduled the rooms, and planned to go the weekend after Chris' birthday. Three days before we were set to leave, and the day after this birthday Chris' mother, Annie, suddenly passed away. This turned our world upside down, and anything we had planned was immediately put on hold. We wanted so much for Annie to be part of this adventure with us and it was a devastating blow to both our families.</p>
                        <p>The third, and thankfully final, attempt was much more spontaneous. After having a difficult couple of weeks, we finally felt up to going out for a night out. We went to Emmy Squared, a new location of a restaurant that had recently opened up in Philadelphia. After a nice dinner and drinks, we decided to walk down the block to one of our favorite bars: Southwark. There we shared another round of cocktails and our conversation started to focus on our future. We had spoken of marriage plenty of times, but this time Chris decided that all the planning and attempts to make the proposal special weren't the point. Being married was the special part so the moment we got home from our night out Chris grabbed the ring box, sat down next to Sumita and told her everything he felt and she said yes!</p>
                    </Col>
                </Row>
                <Row xs={1} sm={1} md={2} >
                <Col>
                        <h3>Our Current Life</h3>
                        <p>We currently live in our home in South Philadelphia with our cat, PK and our newest family member, Loki the energetic Chihuahua mix. Sumita loves to cook & bake, as well as try to keep her urban jungle alive. Chris likes to spend his time researching and practicing computer programming, attempting to learn guitar, and doing an occasional home-improvement project that Sumita has given the green light on.</p>
                        <p>Together we enjoy going out to restaurants throughout Philadelphia, especially new ones that seem impossible to get in to. We're lucky enough to live close to family and friends to visit as often as we can. We enjoy traveling and hope to do much more of it in the future. Perhaps our greatest passion though consists of eating in bed and binge-watching TV shows, like any modern fairy tale romance.</p>
                    </Col>
                <Col>
                        <h3>Our Future Plans</h3>
                        <p>A few days after the wedding celebrations, we plan to head to Mexico to celebrate our first wedding anniversary and Chris's birthday by eating too many tacos and enjoying our first vacation since before the pandemic. In 2022, we hope to catch-up on the travel we've missed out on & see some more of the world. We have yet to finalize the destination for our real honeymoon, but we can guarantee that wherever it ends up being will likely involve good places to eat, day spas to visit, and lots of sleeping in late.</p>
                    </Col>
                    </Row>
            </Container>
        )
    }
}

export default About;
