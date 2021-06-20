import React, { useState } from "react";
import "./NewRoomForm.scss";
import Event from "../../models/Event";
import { Button, Form, Modal } from "react-bootstrap";
import Room from "../../models/Room";
import { ChangeObjectValue } from "../../utils";
import { createRoom } from "../../data/FirebaseHelpers";

export interface INewRoomFormProps {
  event: Event;
  onClose(): void;
}

const NewRoomForm: React.FC<INewRoomFormProps> = (props) => {
  const { event, onClose } = props;
  const [room, setRoom] = useState(new Room());

    function onSubmit() {
        try {
            createRoom(event.id,room);
            onClose();

        } catch (error) {
            // TODO
            throw error;
        }
    }


  return (
    <Modal show={true} onHide={() => onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>New Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Room Name"
            value={room.title}
            onChange={(e) => {
              setRoom(ChangeObjectValue(room, "title", e.target.value));
            }}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => onSubmit()}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewRoomForm;
