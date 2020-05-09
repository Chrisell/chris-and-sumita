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
            <div>
                <h3>COVID19 Updates</h3>
                <p> Never would we have thought to factor a global health pandemic into our wedding planning...yet here we are.  As it stands currently, we are still planning to have our wedding ceremonies the weekend of 10/09-10/10 but understand we may have to change our initial plans that included 200+ guests. As a guest to one of the most intimate moments of our lives where we plan to share the hopes & dreams of our future as well as connect our cultures, we consider you a part of our family and would never want to risk your health & safety. We always planned to have digital viewing options (Zoom & Facebook Live) to connect those celebrating from afar, so those options will be available to everyone. Should we have to postpone the larger celebration altogether, we will let you know as soon as we know our capabilities.  We will continue to closely monitor and adhere to CDC / local government guidelines, so please check back regularly for updates as we are eager to include you!</p>
            </div>
            
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


