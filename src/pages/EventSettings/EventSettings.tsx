import React from "react";
import "./EventSettings.scss";
import Room from "../../models/Room";
import Event from "../../models/Event";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { deleteEvent } from "../../data/FirebaseHelpers";

export interface ITemplateProps {
  rooms: Room[];
  event: Event;
  createRoom(room: Room): void;
}

const EventSettings: React.FC<ITemplateProps> = (props) => {
    const history = useHistory();
    const { rooms, createRoom, event } = props;


    function onDeleteClicked() {
        deleteEvent(event);
        history.push("/home"); // TODO fix this
    }

  return (
    <div className="root">
      <div>Settings</div>
      <div className="rooms">
        {rooms.map((room, index) => (
          <RoomItem key={index} room={room} />
        ))}
      </div>
      <button onClick={() => createRoom(new Room({ title: "New Room" }))}>
        Add Room
      </button>

      <Card border="danger">
        <Card.Header>Danger Zone</Card.Header>
        <Card.Body>
          <Button  variant="danger" onClick={() => onDeleteClicked()}>Delete This Event</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const RoomItem: React.FC<{ key: number; room: Room }> = (props) => {
  const { room, key } = props;
  return (
    <div key={key} className="roomItem">
      <div>{room.title}</div>
    </div>
  );
};

export default EventSettings;
