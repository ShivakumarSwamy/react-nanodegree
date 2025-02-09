import './App.css'
import ListUsers from "./components/ListUsers.jsx";
import HideShowGamesPlayed from "./components/HideShowGamesPlayed.jsx";
import {useState} from "react";
import CreateNewUser from "./components/CreateNewUser.jsx";

function App() {
    const [users, setUsers] = useState([
        {
            "username": "username12",
            "firstName": "1",
            "lastName": "2",
            "gamesPlayed": 0
        },
        {
            "username": "username34",
            "firstName": "3",
            "lastName": "4",
            "gamesPlayed": 0
        },
    ])

    const addUser = (user) => {
        setUsers([...users, user])
    };

    const [hideGamesPlayed, setHideGamesPlayed] = useState(0);

    const handleHideGamesPlayed = () => {
        if (hideGamesPlayed === 0) {
            setHideGamesPlayed(1);
        } else {
            setHideGamesPlayed(0)
        }
    }

    return (
        <div>
            <h1>Welcome to Homepage of Video Game</h1>
            <CreateNewUser onSubmitAddUser={addUser} users={users}/>
            <HideShowGamesPlayed hide={hideGamesPlayed} onClickHandle={handleHideGamesPlayed}/>
            <ListUsers users={users} hideGamesPlayed={hideGamesPlayed}/>
        </div>
    )
}

export default App
