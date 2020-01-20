import React from 'react';
import './App.css';
import CheckIn from './components/CheckIn/CheckIn';
import Lookup from './components/Lookup/Lookup';
import { getMockAttendees, getMockRegistrations } from './services/MockData';
import Dashboard from './components/Dashboard/Dashboard';
import Attendee from './models/Attendee';

const App: React.FC = () => {

  const [tab, setTab] = React.useState(1); // TODO switch to 0
  const [attendees, setAttendees] = React.useState(getMockAttendees());
  const [registrations, setRegistrations] = React.useState(getMockRegistrations());
  function setAttendeeCheckIn(attendee: Attendee, checkedIn: boolean) {
    const foundAttendee = attendees.find((a: Attendee) => (a === attendee));
    if (foundAttendee) {
      foundAttendee.checkedIn = checkedIn;
      setAttendees([...attendees]);
    }
  }

  function getPage(tab: number) {
    switch (tab) {
      case 0:
        return (<Dashboard attendees={attendees} />)
      case 1:
        return (<CheckIn attendees={attendees} checkIn={(attendee, checkedIn) => setAttendeeCheckIn(attendee, checkedIn)} />)
      case 2:
        return (<Lookup registrations={registrations} />)
      default:
        return (<Dashboard attendees={attendees} />)
    }
  }

  return (
    <div className="App">
      <button onClick={() => setTab(0)}>Dashboard</button>
      <button onClick={() => setTab(1)}>Check In</button>
      <button onClick={() => setTab(2)}>Lookup</button>
      {getPage(tab)}
    </div>
  );
}

export default App;
