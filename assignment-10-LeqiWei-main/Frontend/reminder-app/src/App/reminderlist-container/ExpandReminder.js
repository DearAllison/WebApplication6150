import React from 'react'
import './ExpandReminder.scss'

// This class contains the component that would be displayed to show the details of the reminder
class Reminder extends React.Component {
   
  
    render(){
        return (
            <div className="details">
                <li><strong>Title:</strong> {this.props.reminder.title}</li>
                <li><strong>Description:</strong> {this.props.reminder.description}</li>
                <li><strong>Reminder Date:</strong> {this.props.reminder.reminderDate}</li>
                <li><strong>Reminder Time: </strong>{this.props.reminder.reminderTime}</li>
                <li><strong>Completion Status:</strong> {this.props.reminder.completed?"Completed": "In Progress"}</li>

            </div>
        )
    }
    
}

export default Reminder
