const HideShowGamesPlayed = ({hide, onClickHandle}) => {

    const changeHideState = () => {
        onClickHandle();
    };

    return (
        <div>
            <br/>
            <button onClick={() => changeHideState()}>
                {
                    hide === 0 && <label>Hide the Number of Games Played</label>
                }
                {
                    hide === 1 && <label>Show the Number of Games Played</label>
                }
            </button>
        </div>
    );
};

export default HideShowGamesPlayed