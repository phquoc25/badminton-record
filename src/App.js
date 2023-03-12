import { useState } from 'react';
import './App.css';
import PlayerList from './player-list/PlayerList';
import Header from './header/Header';

function App() {
  const attendances = [
    {
      "id": 1560018929026,
      "name": "Quoc",
      "avatar": "images/avatar5.png",
      "isOn": true
    },
    {
      "id": 1560018929039,
      "name": "Huy",
      "avatar": "images/avatar3.png",
      "isOn": true
    },
    {
      "id": 1560018929052,
      "name": "Truong",
      "avatar": "images/avatar4.png",
      "isOn": true
    },
    {
      "id": 1560018929064,
      "name": "Nguyen",
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
      "name": "Bac",
      "avatar": "images/avatar1.png",
      "isOn": true
    },
    {
      "id": 1560018929101,
      "name": "Pierre",
      "avatar": "images/avatar3.png",
      "isOn": false
    },
    {
      "id": 1560018929124,
      "name": "Phuong",
      "avatar": "images/avatar4.png",
      "isOn": false
    }
  ];
  const sortByName = (player1, player2) => player1.name.localeCompare(player2.name); 
  const [attendancesList, setAttendancesList] = useState(attendances.sort(sortByName));
  function onAttendanceChanged(updatedPlayers) {
    setAttendancesList(updatedPlayers.sort(sortByName));
  }
  function getNbOfPresent() {
    return attendancesList.filter((player) => player.isOn).length;
  }
  return (
    <div>
      <Header nbOfPresent={getNbOfPresent()}></Header>
      <PlayerList players={attendancesList} onChanged={onAttendanceChanged}></PlayerList>
    </div>
  );
}

export default App;
