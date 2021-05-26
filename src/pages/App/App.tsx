import React, { useState, useEffect } from "react";
import "./App.scss";
import CheckIn from "../CheckIn/CheckIn";
import Lookup from "../Lookup/Lookup";
import { getMockAttendees, getMockRegistrations } from "../../data/MockData";
import Dashboard from "../Dashboard/Dashboard";
import Attendee from "../../models/Attendee";
import {
  getAttendeesRef,
  updateAttendee,
  selectEvent,
  createEvent,
  getEventsRef,
  getEventRef,
  createRoom,
  getRoomsRef,
} from "../../data/FirebaseHelpers";
import { useObject, useList } from "react-firebase-hooks/database";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEvents, useEvent, useAttendees, useRooms } from "../../Hooks";
import Home from "../Home/Home";
import CreateEvent from "../CreateEvent/CreateEvent";
import Account from "../Account/Account";
import Event from "../Event/Event";

const App: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState(
    localStorage.getItem("selectedEvent")
  );
  function storeSelectedEventId(eventId: string) {
    localStorage.setItem("selectedEvent", eventId);
    setSelectedEventId(eventId);
  }


  const {
    event,
    loading: eventLoading,
    error: eventError,
  } = useEvent(getEventRef(selectedEventId ?? ""));
  const {
    attendees,
    loading: attendeesLoading,
    error: attendeesError,
  } = useAttendees(getAttendeesRef(selectedEventId ?? ""));
  const {
    rooms,
    loading: roomsLoading,
    error: roomsError,
  } = useRooms(getRoomsRef(selectedEventId ?? ""));

  return (
    <Router>
      <div className="App">
        <div className={"nav"}>
          Top level nav
          <div>
            <Link to="/home">
              <button>Home</button>
            </Link>
            <Link to="/account">
              <button>Account</button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/new">
            <CreateEvent />
          </Route>
          <Route path="/event/:eventId">
            <Event />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
