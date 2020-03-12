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
            <div>
                <h2>{ this.state.title }</h2>
                <Carousel showArrows={true}>
                    <div>
                        <img src="img/us/1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="img/us/2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="img/us/3.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="img/us/4.jpg" />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="img/us/5.jpg" />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src="img/us/6.jpg" />
                        <p className="legend">Legend 6</p>
                    </div>
                </Carousel>
            </div>
                
        )
    }

}

export default Page;
