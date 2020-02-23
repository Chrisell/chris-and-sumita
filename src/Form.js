import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'Enter Code'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({code: event.target.value});
    }
    handleClick(event) {
        this.setState({code: ''});
    }
    handleSubmit(event) {
        fetch('https://4qy0oqgung.execute-api.us-east-1.amazonaws.com/wedding-details?code=' + this.state.code)
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.updateDetails(result.data)
                },
                (error) => {
                this.setState({
                    error
                });
                }
            )
        event.preventDefault();
    }
    render() {
        return <div className="form">
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="center" onClick={this.handleClick} onChange={this.handleChange} id="code" value={this.state.code} type="text"/>
                <input className="center" type="submit" name="" id=""/>
            </form>
        </div>;
    }
}

export default Form;
