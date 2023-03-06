import './App.css';
import './PlayerRow'
import PlayerRow from './PlayerRow';

function App() {
  const attendances = [
    {
      "id": 1560018929026,
      "name": "Ho Quoc",
      "avatar": "images/avatar5.png",
      "presentOnTuesday": true,
      "presentOnThursday": false
    },
    {
      "id": 1560018929039,
      "name": "Van Khanh",
      "avatar": "images/avatar3.png",
      "presentOnTuesday": true,
      "presentOnThursday": false
    },
    {
      "id": 1560018929052,
      "name": "Nicolas",
      "avatar": "images/avatar4.png",
      "presentOnTuesday": true,
      "presentOnThursday": false
    },
    {
      "id": 1560018929064,
      "name": "Dieu Vi",
      "avatar": "images/avatar1.png",
      "presentOnTuesday": false,
      "presentOnThursday": false
    },
    {
      "id": 1560018929076,
      "name": "My Han",
      "avatar": "images/avatar2.png",
      "presentOnTuesday": true,
      "presentOnThursday": true
    },
    {
      "id": 1560018929089,
      "name": "Han Nhon",
      "avatar": "images/avatar1.png",
      "presentOnTuesday": true,
      "presentOnThursday": true
    },
    {
      "id": 1560018929101,
      "name": "Minh Quan",
      "avatar": "images/avatar3.png",
      "presentOnTuesday": false,
      "presentOnThursday": false
    },
    {
      "id": 1560018929112,
      "name": "Pierre",
      "avatar": "images/avatar5.png",
      "presentOnTuesday": false,
      "presentOnThursday": false
    },
    {
      "id": 1560018929124,
      "name": "Tuan Anh",
      "avatar": "images/avatar4.png",
      "presentOnTuesday": false,
      "presentOnThursday": true
    }
  ];
  const attendancesList = attendances.map((attendance) => <PlayerRow player={attendance}></PlayerRow>);
  return (
    <div id="attendance-record">
    <div class="header row-container">
      <div class="name-panel">
        <label>NAME</label>
      </div>
      <div class="check-opt">
        <label>TUESDAY</label>
        <div id="tuesday-status-img" class="status-img unhappy"></div>
      </div>
      <div class="check-opt">
        <label>THURSDAY</label>
        <div id="thursday-status-img" class="status-img unhappy"></div>
      </div>
    </div>

    <div id="list-body">
      {attendancesList}
    </div>
    <div class="list-footer">
      <input class="name-input-panel" id="attendee-name" type="text" name="attendeeName"
             value="" placeholder="Enter name..."/>

      <div>
        <div id="add-participant" class="btn btn-primary">
          <img class="btn-icon" src="images/blue-plus-icon.png"/>
          <span>Add new participant</span>
        </div>

        <div id="delete-participant" class="btn btn-danger">
          <img class="btn-icon" src="images/delete-icon.png"/>
          <span>Delete</span>
        </div>
      </div>
      <div id="save-participants" class="btn btn-success btn-save-attendee">
        <img class="btn-icon" src="images/check-mark.png"/>
        <span>Save and continue</span>
      </div>
    </div>
  </div>
  );
}

export default App;
