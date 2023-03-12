import { useState } from 'react';
import './App.css';
import PlayerList from './player-list/PlayerList';

function App() {
  const attendances = [
    {
      "id": 1560018929026,
      "name": "Ho Quoc",
      "avatar": "images/avatar5.png",
      "isOn": true
    },
    {
      "id": 1560018929039,
      "name": "Van Khanh",
      "avatar": "images/avatar3.png",
      "isOn": true
    },
    {
      "id": 1560018929052,
      "name": "Nicolas",
      "avatar": "images/avatar4.png",
      "isOn": true
    },
    {
      "id": 1560018929064,
      "name": "Dieu Vi",
      "avatar": "images/avatar1.png",
      "isOn": false
    },
    {
      "id": 1560018929076,
      "name": "My Han",
      "avatar": "images/avatar2.png",
      "isOn": true
    },
    {
      "id": 1560018929089,
      "name": "Han Nhon",
      "avatar": "images/avatar1.png",
      "isOn": true
    },
    {
      "id": 1560018929101,
      "name": "Minh Quan",
      "avatar": "images/avatar3.png",
      "isOn": false
    },
    {
      "id": 1560018929112,
      "name": "Pierre",
      "avatar": "images/avatar5.png",
      "isOn": false
    },
    {
      "id": 1560018929124,
      "name": "Tuan Anh",
      "avatar": "images/avatar4.png",
      "isOn": false
    }
  ];
  const sortByName = (player1, player2) => player1.name.localeCompare(player2.name); 
  const [attendancesList, setAttendancesList] = useState(attendances.sort(sortByName));
  function onAttendanceChanged(updatedPlayers) {
    setAttendancesList(updatedPlayers.sort(sortByName));
  }
  return (
    <div>
      <div className="header row-container">
        <div className="name-panel">
          <label>NAME</label>
        </div>
        <div className="check-opt">
          <label>TUESDAY</label>
          <div id="tuesday-status-img" className="status-img unhappy"></div>
        </div>
        <div className="check-opt">
          <label>THURSDAY</label>
          <div id="thursday-status-img" className="status-img unhappy"></div>
        </div>
      </div>
      <PlayerList players={attendancesList} onChanged={onAttendanceChanged}></PlayerList>
    </div>
  );
}

export default App;
