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
                <Carousel stopOnHover={false} interval={5000} transitionTime={1000} autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
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
