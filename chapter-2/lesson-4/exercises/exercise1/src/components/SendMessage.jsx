import {useState} from "react";

const SendMessage = ({onSubmitNewMessage}) => {
    const [message, setMessage] = useState("");
    // If the user did not type anything, he/she should not be allowed to submit.
    const isDisabled = () => message === ""

    const sendNewMessage = (event) => {
        event.preventDefault();
        onSubmitNewMessage(message);
        setMessage("");
    }

    return (
        <div>
            <form className="input-group" onSubmit={sendNewMessage}>
                <input
                    type="text"
                    className="form-control"
                    value={message}
                    placeholder="Enter your message..."
                    onChange={event => setMessage(event.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage