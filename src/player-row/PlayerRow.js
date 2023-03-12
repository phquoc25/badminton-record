import './PlayerRow.scss';

function PlayerRow({ onCheckChanged, player }) {
    return (
        <div className="item">
            <span className="item__label">{player.name}</span>
            <input className="item__switch" 
                type="checkbox" 
                checked={player.isOn}
                onChange={onCheckChanged}
                >
                </input>
        </div>
    );
}

export default PlayerRow;