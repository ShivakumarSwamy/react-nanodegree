const ListFavouriteMovies = ({profiles, users, movies}) => {
    return (
        <ol>
            {
                profiles.map(profile =>
                    (
                        <li key={profile.id}>
                            {/*template literal*/}
                            <p>{`${users[profile.userID]?.name || "Unknown User"}'s
                                favourite movie is 
                                ${movies[profile.favoriteMovieID]?.name || "Unknown Movie"}.`}</p>
                        </li>
                    )
                )
            }
        </ol>
    )
}

export default ListFavouriteMovies;