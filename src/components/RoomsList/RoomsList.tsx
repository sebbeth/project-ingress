import React from "react";
import "./RoomsList.scss";
import { getRooms } from "../../helpers";
import Room from "../../models/Room";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export interface IRoomsListProps {}

const RoomsList: React.FC<IRoomsListProps> = (props) => {
  const rooms = getRooms();

  return (
    <div className="root">
      Rooms
      {rooms.map((room) => (
        <RoomsListItem room={room} />
      ))}
    </div>
  );
};

export interface IRoomsListItemProps {
  room: Room;
}
const RoomsListItem: React.FC<IRoomsListItemProps> = (props) => {
  const { room } = props;
  const { url } = useRouteMatch();

  return (
    <div>
      <span>{room.title}</span>
      <Link to={`${url}room/${room.id}`}>
        <Button>View Room</Button>
      </Link>
    </div>
  );
};

export default RoomsList;
