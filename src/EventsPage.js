import React from 'react';
import Event from './Event.js'
import Form from './Form.js'
import './Page.css'

class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            details: {}
        }
        this.updateDetails = this.updateDetails.bind(this);
    }
    updateDetails(value) {
        this.setState({ details: value })
    }
    render() {
        return (
            Object.keys(this.state.details).length == 0 ?
                <Form updateDetails={this.updateDetails}></Form>
            : 
                <div className="events">
                { this.renderEvents() }
                </div>
            
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


