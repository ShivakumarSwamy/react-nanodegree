import MessageList from "./MessageList.jsx";
import SendMessage from "./SendMessage.jsx";

const ChatWindow = ({username, messages, addMessage}) => {

    const mapMessageToUsername = (message) => {
        addMessage(
            {
                "username": username,
                "text": message
            }
        )
    }

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
            <MessageList username={username} messages={messages}/>
            <SendMessage onSubmitNewMessage={mapMessageToUsername}/>
        </div>
    )
}

export default ChatWindow