import "./App.scss";
import React from "react";
import ReminderItemContainer from "./reminderlist-container/ReminderItemContainer";
import AddReminder from "./reminderform_container/AddReminder";

// This is my main component class.
// The Webapp figuratively starts here (technically at the index.js)
class App extends React.Component {

  // This component holds the state of all my reminders in an array and updates them whenever necessary
  constructor() {
    super();
    this.state = {
        reminders: [],
    };
  }

// This method will call the fetch PUT on Rest APi to update the completion status of the reminder
  markComplete = (id) => {
    this.setState({
        reminders: this.state.reminders.map((reminder) => {
        if (reminder.id === id) {
          reminder.completed = !reminder.completed;
          const data = {
            completed: reminder.completed,
            title: reminder.title,
            description: reminder.description,
            reminderDate: reminder.reminderDate,
            reminderTime: reminder.reminderTime
          };
          // console.log(data);
          const url = "http://localhost:9002/reminder/" + id;
          // console.log(url);
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
        return reminder;
      }),
    });
  };

// This method will call the fetch DELETE on Rest APi to delete the reminder

  delReminder = (id) => {
    const url = "http://localhost:9002/reminder/" +id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then(data=> {console.log(data);
      this.setState({reminders:[...this.state.reminders.filter
      (reminder=> reminder.id!==id)]})})
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
// This method will call the fetch POST on Rest APi to create a new reminder

  addReminder=(reminder)=>{
    console.log(reminder.title + reminder.description + reminder.reminderTime);
    const data = {
      title: reminder.title,
      description: reminder.description,
      reminderDate: reminder.reminderDate,
      reminderTime: reminder.reminderTime,
    };

    fetch('http://localhost:9002/reminder/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((data) => {console.log(data);
      this.setState({reminders:
    [...this.state.reminders, data]});
      });
    console.log("added");
  }

  // Lifecycle method of react
  // I am using it to update the state of the reminders at every cycle
  componentDidMount() {
    console.log("component did mount");
    let reminderList = [];
    fetch("http://localhost:9002/reminder")
      .then((response) => response.json())
      .then((data) => {
        reminderList = data.map((reminder, i) => {
          return reminder;
        });

        this.setState({
            reminders: reminderList,
        });
      });
    // console.log(reminderList);
  }

  BTN_ = () => {
    this.setState({ showAddReminder: !this.state.showAddReminder });
  }
  // renders two things - adding the reminder and viewing the reminder
  render() {
    console.log("render ");
    const Reminders = this.state.reminders;
    let {showAddReminder } = this.state;
    let displayAddReminder = { opacity: showAddReminder ? "1" : "0",transition:showAddReminder?"opacity 0.5s ease-in": "all 0.5s ease-in-out"};
    return (
      <div className="tasksToolbar">
        <h3 className="tasksToolbar-title">Reminder List Application</h3>
        <button className='btn' onClick={()=>this.BTN_()}>{showAddReminder?'Hide':'Add'}</button>
        <div style={displayAddReminder} className='table_main'>
          <AddReminder  addReminder={this.addReminder}/>
        </div>

        <ReminderItemContainer
          Reminders={Reminders}
          markComplete={this.markComplete}
          delReminder={this.delReminder}
        />
      </div>
    );
  }
}

export default App;

