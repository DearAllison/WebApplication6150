import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddReminder.scss'

// This component class adds my new reminder by invoking a fetch post on the API
class AddReminder extends Component {
    
    state={
        title: '',
        description: '',
        reminderDate: '',
        reminderTime: '',
    }
   
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addReminder(this.state);
        this.setState({title: '',
            description: '',
            reminderDate: '',
            reminderTime: '',})
    }
    
    onChange=(e)=> this.setState({[e.target.name]: e.target.value});
// This components renders a form for the user to fill in the details
    render() {
    
        return (
      
            <form onSubmit={this.onSubmit} className="flexBoxFix" >
                <input type="text" 
                name="title" 
                placeholder="Add Reminder ..."
                value={this.state.title}
                onChange={this.onChange}
                className="title"
                required
                />

                <input type="text" 
                name="description" 
                placeholder="Add Description ..."
                value={this.state.description}
                onChange={this.onChange}
                className="title"
                />

                <input type="date" 
                name="reminderDate" 
                value={this.state.reminderDate}
                onChange={this.onChange}
                className="date"
                />

                <input type="time" 
                name="reminderTime" 
                value={this.state.reminderTime}
                onChange={this.onChange}
                className="date"
                /> 

                <input type="submit" 
                value="Submit"
                className="submitBtn"
                />  

            </form>
        )
    }
}

//PropTypes
AddReminder.propTypes={
    addReminder: PropTypes.func.isRequired,
}
export default AddReminder
