import './PlayerRow.scss';

function PlayerRow({ player }) {
    return (
        <div className="item">
            <span className="item__label">{player.name}</span>
            <input className="item__switch" 
                type="checkbox" 
                checked={player.tuesday}
                onChange={onCheckChange}
                >
                </input>
            <input className="item__switch" type="checkbox" checked={player.thursday}></input>
        </div>
    );
}

export default PlayerRow;