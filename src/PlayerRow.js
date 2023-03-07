import './PlayerRow.scss';

function PlayerRow({ player }) {
    return (
        <div className="list__item">
            <span className="item__label">{player.name}</span>
            <input className="item__switch" type="checkbox"></input>
            <input className="item__switch" type="checkbox"></input>
        </div>
    );
}

export default PlayerRow;