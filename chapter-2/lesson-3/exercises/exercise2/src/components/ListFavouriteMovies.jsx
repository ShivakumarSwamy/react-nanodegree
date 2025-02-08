function groupBy(array, key) {
    return array.reduce((accumulator, element) => {
            const value = element[key];

            // check if no value exists
            if (!accumulator[value]) {
                accumulator[value] = []
            }

            // add element to existing value
            accumulator[value].push(element);
            return accumulator
        },
        // empty object
        {}
    );

}

function foundMovie(profilesBy, users) {
    return <ul>
        {
            profilesBy.map(profile => (
                    <li key={profile.id}>
                        {`${users[profile.userID]?.name || "Unknown User"}`}
                    </li>
                )
            )
        }
    </ul>;
}

function notFoundMovie() {
    return <p>No one favourite this movie.</p>;
}

const ListFavouriteMovies = ({profiles, users, movies}) => {
    // {
    //   "1": [
    //     { id: 1, userID: "1", favoriteMovieID: "1" },
    //     { id: 2, userID: "2", favoriteMovieID: "1" }
    //   ],
    //   "2": [
    //     { id: 4, userID: "5", favoriteMovieID: "2" }
    //   ],
    // ...
    const profilesBy_favMovieID = groupBy(profiles, "favoriteMovieID")
    return (
        <ol>
            {
                Object.keys(movies).map(movieId => (
                        <li key={movieId}>
                            <p>{`List of users who favourite the movie ${movies[movieId]?.name}`}</p>
                            {
                                profilesBy_favMovieID[movieId]
                                    ? foundMovie(profilesBy_favMovieID[movieId], users)
                                    : notFoundMovie()
                            }
                        </li>
                    )
                )
            }
        </ol>
    )

};

export default ListFavouriteMovies