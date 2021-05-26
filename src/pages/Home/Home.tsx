import React from "react";
import EventsList from "../../components/EventsList/EventsList";
import { createEvent, getEventsRef } from "../../data/FirebaseHelpers";
import { useEvents } from "../../Hooks";
import "./Home.scss";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
    const {
        events,
        loading: eventsLoading,
        error: eventsError,
      } = useEvents(getEventsRef());
  return (
    <div>
      <div>Home</div>
      <EventsList
        events={events}
        createEvent={(event) => createEvent(event)}
      />
    </div>
  );
};

export default Home;
