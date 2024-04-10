import React from 'react';
import './ReminderItem.scss';
import { FcCheckmark , FcUndo, FcExpand, FcCollapse, FcDeleteRow} from "react-icons/fc";
import ExpandReminder from './ExpandReminder'

// This class is my component which holds all my reminder-items ad process the each reminder-item for rendering
class ReminderItem extends React.Component{

    state={
        isExpanded : false,
    }
// This will togle the expanded view of the reminder
    toggle = () => this.setState(
        { isExpanded: !this.state.isExpanded }
    )

    render() {
        const {id, title}= this.props.reminder;

        // It renders a titiel and three task buttons
    return (
    <div className="ItemContainer">
        <div  className={this.props.reminder.completed ? 'text-strike' : null}
               id= {this.state.isExpanded ? "Selected": "null" }
               > 
            {''} {title}
            <button onClick={this.props.delReminder.bind(this, id)} 
                className="del" title="Delete">
                <FcDeleteRow/>
            </button> 
            
            <button onClick={this.props.markComplete.bind(this, id)} 
                className="complete" 
                title={this.props.reminder.completed? "Mark Pending": "Mark Done"}>
                {this.props.reminder.completed?<FcUndo />:<FcCheckmark />}
            </button>
            
            <button onClick={this.toggle} 
                className="expand" 
                title={this.state.isExpanded ? "Hide": "View" }>
                {this.state.isExpanded ?  <FcCollapse /> : <FcExpand/>}
            </button>

            {this.state.isExpanded && <ExpandReminder reminder = {this.props.reminder} />}
        </div>
    </div>
    )
  }
}

export default ReminderItem
