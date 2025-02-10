import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./components/ChatWindow.jsx";
import {useState} from "react";

const users = [{username: "Amy"}, {username: "John"}];


const App = () => {

    const [messages, setMessages] = useState([
        {username: "Amy", text: "Hi, Jon!"},
        {username: "Amy", text: "How are you?"},
        {username: "John", text: "Hi, Amy! Good, you?"},
    ]);

    const pushNewMessage = (message) => {
        setMessages([...messages, message])
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <div className="container">
                {
                    users.map(user =>
                        <ChatWindow key={user.username}
                                    username={user.username}
                                    messages={messages}
                                    addMessage={pushNewMessage}/>
                    )
                }
            </div>
        </div>
    );
};

export default App;