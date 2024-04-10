import React from "react";
import "./ReminderItemContainer.scss";
import ReminderItem from "./ReminderItem";

// This is my helper component class to pass on the props to my reminderItem class
class ReminderItemContainer extends React.Component {
  render() {
    return this.props.Reminders.map((reminder) => (
      <ReminderItem
        key={reminder.id}
        reminder={reminder}
        markComplete={this.props.markComplete}
        delReminder={this.props.delReminder}
      />
    ));
  }
}

export default ReminderItemContainer;
