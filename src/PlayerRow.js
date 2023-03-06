import './PlayerRow.scss';

function PlayerRow({ player }) {
    return (
        <div class="row">
            <span class="row__label">{player.name}</span>
            <input class="row__switch" type="checkbox"></input>
            <input class="row__switch" type="checkbox"></input>
        </div>
    );
}

export default PlayerRow;