import React, { useState, useEffect } from 'react';
import './App.css';
import CheckIn from './components/CheckIn/CheckIn';
import Lookup from './components/Lookup/Lookup';
import { getMockAttendees, getMockRegistrations } from './data/MockData';
import Dashboard from './components/Dashboard/Dashboard';
import Attendee from './models/Attendee';
import { getAttendeesRef, updateAttendee, selectEvent, createEvent } from './data/FirebaseHelpers';
import { useObject, useList } from 'react-firebase-hooks/database';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Events from './components/Events/Events';

const App: React.FC = () => {
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

  return (
    <Router>
      <div className="App">
        <Link to="/"><button>Dashboard</button></Link>
        <Link to="/checkin"><button>Check In</button></Link>
        <Link to="/lookup"><button>Lookup</button></Link>
        <Link to="/events"><button>Switch Event</button></Link>
        <Switch>
          <Route exact path="/">
            <Dashboard attendees={attendees} />
          </Route>
          <Route path="/checkin">
            <CheckIn attendees={attendees} updateAttendee={(attendee) => updateAttendee(attendee)} />
          </Route>
          <Route path="/lookup">
            <Lookup registrations={registrations} />
          </Route>
          <Route path="/events">
            <Events
              events={[]}
              selectEvent={(event) => selectEvent(event)}
              createEvent={(event) => createEvent(event)}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
