import Message from "./Message.jsx";

const MessageList = ({username, messages}) => {
    return (
        <ul className="message-list">
            {
                messages.map((message, index) => (
                        <Message key={index}
                                 messageClassName={message.username === username ? "message sender" : "message recipient"}
                                 messageText={`${message.username}: ${message.text}`}
                        />
                    )
                )
            }
        </ul>

    )
}

export default MessageList