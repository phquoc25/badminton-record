import './PlayerRow.css';

function PlayerRow({ player }) {
    return (
        <div class="row-container">
            <span class="name-panel">{player.name}</span>
            <input type="checkbox" class="switch_1"></input>
            <input type="checkbox" class="switch_1"></input>
        </div>
    );
}

export default PlayerRow;