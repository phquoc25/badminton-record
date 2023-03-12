import './PlayerList.scss';
import PlayerRow from '../player-row/PlayerRow';

function PlayerList({ players }) {
    const attendancesList = players.map((player) => <PlayerRow key={player.name} player={player}></PlayerRow>);
    return (
        <div className='list'>
            {attendancesList}
        </div>
    );
}

export default PlayerList;