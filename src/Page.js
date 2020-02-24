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
            <h2>{ this.state.title }</h2>
        )
    }

}

export default Page;
