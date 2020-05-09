import React from 'react';
import './Event.css'

class Event extends React.Component {
    render() {
        return (
            <div className={ "event_tile " + this.props.event.name }>
                <h4>{ this.props.event['location'] }</h4>
                <p>
                    { this.props.event['date'] 
                    + ", " 
                    + this.props.event['time'] }
                </p>
            </div>
            
        )
    }
}

export default Event;