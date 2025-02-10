const Message = ({messageClassName, messageText}) => {
    return (
        <li className={messageClassName}>
            <p>{messageText}</p>
        </li>
    )
}

export default Message