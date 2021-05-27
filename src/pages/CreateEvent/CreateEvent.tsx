import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { createEvent } from "../../data/FirebaseHelpers";
import Event from "../../models/Event";
import { ChangeObjectValue } from "../../utils";
import "./CreateEvent.scss";

export interface ICreateEventProps {}

const CreateEvent: React.FC<ICreateEventProps> = (props) => {
  const [event, setEvent] = useState<Event>(new Event());
  const history = useHistory();
  function onSubmit() {
    createEvent(event);
    // Navigate back to the event list
    history.push('/home')
  }

  return (
    <div>
      <div>CreateEvent</div>
      {/* <Form> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Event Name"
            value={event.name}
            onChange={(e) => {
                setEvent(ChangeObjectValue(event, "name", e.target.value));
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => onSubmit()}>
          Create
        </Button>
      {/* </Form> */}
    </div>
  );
};

export default CreateEvent;
