import './PlayerList.scss';
import PlayerRow from '../player-row/PlayerRow';

function PlayerList({ onChanged, players }) {
    function onPresentChanged(player) {
        player.isOn = !player.isOn;
        const newPlayers = players.filter((pl) => pl.id !== player.id);
        onChanged([...newPlayers, player]);
    }
    const attendancesList = players.map((player) => <PlayerRow key={player.name} player={player} onCheckChanged={() => onPresentChanged(player)}></PlayerRow>);
    return (
        <div className='list'>
            {attendancesList}
        </div>
    );
}

export default PlayerList;