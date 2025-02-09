const User = ({userName, playedGames}) => {
  return (
      <li>{`${userName} played ${playedGames} games`}</li>
  )
}

export default User;