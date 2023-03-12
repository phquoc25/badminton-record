import './Header.scss'
function Header({nbOfPresent}) {
    const imgClass = 'header-img ' + (nbOfPresent >= 6 ? 'header-img--happy' : 'header-img--unhappy');
    return (
        <div className="header">
            <div className="header__name">
                <label>NAME</label>
            </div>
            <div className="header__status">
                <div className="header-counter">{nbOfPresent}</div>
                <div className={imgClass}></div>
            </div>
        </div>
    );
}

export default Header;