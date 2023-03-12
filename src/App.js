import './App.css';
import PlayerList from './player-list/PlayerList';

function App() {
  const attendances = [
    {
      "id": 1560018929026,
      "name": "Ho Quoc",
      "avatar": "images/avatar5.png",
      "tuesday": true,
      "thursday": false
    },
    {
      "id": 1560018929039,
      "name": "Van Khanh",
      "avatar": "images/avatar3.png",
      "tuesday": true,
      "thursday": false
    },
    {
      "id": 1560018929052,
      "name": "Nicolas",
      "avatar": "images/avatar4.png",
      "tuesday": true,
      "thursday": false
    },
    {
      "id": 1560018929064,
      "name": "Dieu Vi",
      "avatar": "images/avatar1.png",
      "tuesday": false,
      "thursday": false
    },
    {
      "id": 1560018929076,
      "name": "My Han",
      "avatar": "images/avatar2.png",
      "tuesday": true,
      "thursday": true
    },
    {
      "id": 1560018929089,
      "name": "Han Nhon",
      "avatar": "images/avatar1.png",
      "tuesday": true,
      "thursday": true
    },
    {
      "id": 1560018929101,
      "name": "Minh Quan",
      "avatar": "images/avatar3.png",
      "tuesday": false,
      "thursday": false
    },
    {
      "id": 1560018929112,
      "name": "Pierre",
      "avatar": "images/avatar5.png",
      "tuesday": false,
      "thursday": false
    },
    {
      "id": 1560018929124,
      "name": "Tuan Anh",
      "avatar": "images/avatar4.png",
      "tuesday": false,
      "thursday": true
    }
  ];
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
      <PlayerList players={attendances}></PlayerList>
      <div className="list-footer">
        <input className="name-input-panel" id="attendee-name" type="text" name="attendeeName"
          value="" placeholder="Enter name..." />

        <div>
          <div id="add-participant" className="btn btn-primary">
            <img className="btn-icon" src="images/blue-plus-icon.png" />
            <span>Add new participant</span>
          </div>

          <div id="delete-participant" className="btn btn-danger">
            <img className="btn-icon" src="images/delete-icon.png" />
            <span>Delete</span>
          </div>
        </div>
        <div id="save-participants" className="btn btn-success btn-save-attendee">
          <img className="btn-icon" src="images/check-mark.png" />
          <span>Save and continue</span>
        </div>
      </div>
    </div>
  );
}

export default App;
