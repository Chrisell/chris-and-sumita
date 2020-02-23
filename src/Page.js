import React from 'react';
import Event from './Event.js'
import './Page.css'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <div className="page">
                <h2>{ this.state.title }</h2>
            </div>
            
        )
    }

}

export default Page;
