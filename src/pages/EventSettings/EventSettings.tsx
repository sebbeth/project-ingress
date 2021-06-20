import React, { useState } from "react";
import "./EventSettings.scss";
import Room from "../../models/Room";
import Event from "../../models/Event";
import { Button, Card, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import { deleteEvent } from "../../data/FirebaseHelpers";
import NewRoomForm from "../../components/NewRoomForm/NewRoomForm";

export interface ITemplateProps {
  rooms: Room[];
  event: Event;
}

const EventSettings: React.FC<ITemplateProps> = (props) => {
  const history = useHistory();
  const { rooms, event } = props;
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);

  function onDeleteClicked() {
    deleteEvent(event);
    history.push("/home"); // TODO fix this
  }

  function onNewRoomClicked() {

  }

  return (
    <div className="root">
      <div>Settings</div>
      <div>Rooms:</div>
      <div className="rooms">
        {rooms.map((room, index) => (
          <RoomItem key={index} room={room} />
        ))}
      </div>
      <Button variant="secondary" onClick={() => setShowNewRoomModal(true)}>
        Add Room
      </Button>

      <Card border="danger">
        <Card.Header>Danger Zone</Card.Header>
        <Card.Body>
          <Button variant="danger" onClick={() => onDeleteClicked()}>
            Delete This Event
          </Button>
        </Card.Body>
      </Card>
      {
        showNewRoomModal &&
      <NewRoomForm event={event} onClose={() => setShowNewRoomModal(false)}/>
      }
      
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
