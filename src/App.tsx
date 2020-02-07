import React, { useState, useEffect } from 'react';
import './App.css';
import CheckIn from './components/CheckIn/CheckIn';
import Lookup from './components/Lookup/Lookup';
import { getMockAttendees, getMockRegistrations } from './data/MockData';
import Dashboard from './components/Dashboard/Dashboard';
import Attendee from './models/Attendee';
import { getAttendeesRef, updateAttendee } from './data/FirebaseHelpers';
import { useObject, useList } from 'react-firebase-hooks/database';

const App: React.FC = () => {

  const [tab, setTab] = useState(1); // TODO switch to 0
  // const [attendees, setAttendees] = useState(getMockAttendees());
  // const attendees = useAttendees(getAttendeesRef());
  // const [attendees, setAttendees] = useState([] as Attendee[]);
  const [values, loading, error] = useList(getAttendeesRef());
  const attendees: Attendee[] = [];
  if (values && values.length > 0) {
    values.forEach((value, index) => {
      attendees.push(new Attendee(value.val()));
    })
  }


  console.log(attendees);
  const [registrations, setRegistrations] = useState(getMockRegistrations());

  // function setAttendeeCheckIn(attendee: Attendee, checkedIn: boolean) {
  //   const foundAttendee = attendees.find((a: Attendee) => (a === attendee));
  //   if (foundAttendee) {
  //     foundAttendee.checkedIn = checkedIn;
  //     updateAttendee(foundAttendee);
  //     // setAttendees([...attendees]);
  //   }
  // }

  function getPage(tab: number) {
    switch (tab) {
      case 0:
        return (<Dashboard attendees={attendees} />)
      case 1:
        return (<CheckIn attendees={attendees} updateAttendee={(attendee) => updateAttendee(attendee)} />)
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
