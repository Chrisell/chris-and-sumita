import React from 'react';
import './Page.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            </div> 
        )
    }

}

export default Page;
