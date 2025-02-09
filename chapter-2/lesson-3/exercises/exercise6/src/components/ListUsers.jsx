import User from "./User.jsx";

const ListUsers = ({users, hideGamesPlayed}) => {
    return (
        <div>
            <p>List of users who play video games</p>
            <ul>
                {
                    users.map(
                        user => <User key={user.username} userName={user.username}
                                      playedGames={hideGamesPlayed === 1 ? "*" : user.gamesPlayed}/>
                    )
                }
            </ul>
        </div>
    )
};

export default ListUsers