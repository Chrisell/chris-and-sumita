import React from 'react';
import './Page.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <div className="home">
                <h1>Sumita &amp; Chris</h1>
                <p>Visit us today through <a href="https://us02web.zoom.us/j/4568303745?pwd=QmVHY0g1WVdNdE9ockNna1VXVEhmZz09" target="blank">this Zoom</a>.</p>
                <p>If the link above does not work, people enter the code 456 830 3745 and use the password 10102020.</p>
                <Carousel showArrows={true} showThumbs={false}>
                    <div>
                        <img alt="Sumita and Chris" src="img/us/1.jpg" />
                    </div>
                    <div>
                        <img alt="Sumita and Chris" src="img/us/2.jpg" />
                    </div>
                    <div>
                        <img alt="Sumita and Chris" src="img/us/3.jpg" />
                    </div>
                    <div>
                        <img alt="Sumita and Chris" src="img/us/4.jpg" />
                    </div>
                    <div>
                        <img alt="Sumita and Chris" src="img/us/5.jpg" />
                    </div>
                    <div>
                        <img alt="Sumita and Chris" src="img/us/6.jpg" />
                    </div>
                </Carousel>
            </div>
                
        )
    }

}

export default Page;
