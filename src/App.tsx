import React from 'react';
import './App.css';
import CheckIn from './components/CheckIn/CheckIn';
import CheckOut from './components/CheckOut/CheckOut';
import Lookup from './components/Lookup/Lookup';
import { getMockAttendees } from './services/MockData';
const attendees = getMockAttendees();

const App: React.FC = () => {

  const [tab, setTab] = React.useState(0);



  return (
    <div className="App">
      <button onClick={() => setTab(0)}>Check In</button>
      <button onClick={() => setTab(1)}>Check Out</button>
      <button onClick={() => setTab(2)}>Lookup</button>
      {getPage(tab)}
    </div>
  );
}

function getPage(tab: number) {
  switch (tab) {
    case 0:
      return (<CheckIn attendees={attendees} />)
    case 1:
      return (<CheckOut attendees={attendees} />)
    case 2:
      return (<Lookup attendees={attendees} />)
    default:
      return (<CheckIn attendees={attendees} />)
  }
}
export default App;
