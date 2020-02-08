import firebase from 'firebase'
import Attendee from '../models/Attendee';
import Event from '../models/Event';

const firebaseConfig = {
    apiKey: "AIzaSyD2WqcmVMw358QDhSDqjUz3oAESgae6quI",
    authDomain: "project-ingress-eaac1.firebaseapp.com",
    databaseURL: "https://project-ingress-eaac1.firebaseio.com",
    projectId: "project-ingress-eaac1",
    storageBucket: "project-ingress-eaac1.appspot.com",
    messagingSenderId: "156018459325",
    appId: "1:156018459325:web:7c54c7428b683076112dd4",
    measurementId: "G-MFFL307JF1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;


export function getAttendeesRef(eventId: string) {
    return firebase.database().ref(`events/${eventId}/attendees`);
}

export function getEventsRef() {
    return firebase.database().ref('events')
}

export function getEventRef(eventId: string) {
    return firebase.database().ref('events/' + eventId);
}

export function selectEvent(event: Event) {

}

export function createEvent(event: Event) {
    const key = firebase.database().ref().child('events').push().key;
    if (key) event.id = key;
    updateEvent(event);
}

export function updateEvent(event: Event) {
    firebase.database().ref('events/' + event.id).set(event);
}

export function updateAttendee(eventId: string, attendee: Attendee) {
    firebase.database().ref(`events/${eventId}/attendees/${attendee.id}`).set(attendee);
}

export function createAttendee(eventId: string) {
    const key = firebase.database().ref().child(`events/${eventId}/attendees`).push().key;
    const newAttendee = new Attendee({
        id: key,
        firstname: "Billy",
        surname: "Smith",
        checkedIn: false,
        room: 2
    });
    updateAttendee(eventId, newAttendee);

}