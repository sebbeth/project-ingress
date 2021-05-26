import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EventsList from "../../components/EventsList/EventsList";
import { createEvent } from "../../data/FirebaseHelpers";
import "./Home.scss";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  
  return (
    <>
    <div className="header">
      <h2>My Events</h2>
    <Link to="/new">
        <Button>Create Event</Button>
    </Link>
    </div>
      <EventsList
        createEvent={(event) => createEvent(event)}
      />
    </>
  );
};

export default Home;
