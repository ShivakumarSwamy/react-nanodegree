import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const Email = ({text}) => (<ol>
    <li>{`${text}`}</li>
</ol>)

// example component via function
function Container() {
    return (
        <div>
            <Email text={{}}/>
        </div>)
}

Email.propTypes = {
    text: PropTypes.string.isRequired
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
)
