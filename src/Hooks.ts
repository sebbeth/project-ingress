import { useEffect, useState } from "react";
import Event from "./models/Event";
import { useObject, useList } from 'react-firebase-hooks/database';
import Room from "./models/Room";
import Attendee from "./models/Attendee";


export function useEvents(ref: any) {
    const [values, loading, error] = useList(ref);
    const [events, setEvents] = useState([] as Event[]);
    useEffect(() => {
        if (values && values.length > 0) {
            const newEvents: Event[] = [];
            values.forEach((item) => {
                newEvents.push(new Event(item.val()));
            });
            setEvents(newEvents);
        }
    }, [values]);
    return { events, loading, error };
}

export function useEvent(ref: any) {
    const [object, loading, error] = useObject(ref);
    const [event, setEvent] = useState({} as Event);
    useEffect(() => {
        if (object && object.val()) {
            setEvent(new Event(object.val()));
        }
    }, [object]);
    return { event, loading, error };
}



export function useAttendees(ref: any) {
    const [items, loading, error] = useList(ref);
    const [attendees, setAttendees] = useState([] as Attendee[]);
    useEffect(() => {
        if (items && items.length > 0) {
            const newAttendees: Attendee[] = [];
            items.forEach((item) => {
                newAttendees.push(new Attendee(item.val()));
            });
            setAttendees(newAttendees);
        }
    }, [items]);
    return { attendees, loading, error };
}


export function useRooms(ref: any) {
    const [items, loading, error] = useList(ref);
    const [rooms, setRooms] = useState([] as Room[]);
    useEffect(() => {
        if (items && items.length > 0) {
            const newRooms: Room[] = [];
            items.forEach((item) => {
                newRooms.push(new Room(item.val()));
            });
            setRooms(newRooms);
        }
    }, [items]);
    return { rooms, loading, error };
}