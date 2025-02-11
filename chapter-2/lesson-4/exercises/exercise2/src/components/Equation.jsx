import {useEffect, useState} from "react";


const Equation = ({updateScore}) => {

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [proposedAnswer, setProposedAnswer] = useState(null);

    function setValues() {
        setValue1(Math.floor(Math.random() * 100));
        setValue2(Math.floor(Math.random() * 100));
        setValue3(Math.floor(Math.random() * 100));
    }

    // use effect for initialize once values
    useEffect(() => {
        setValues();
    }, []);

    // use effect to calculate proposedAnswer
    useEffect(() => {
        if (value1 !== null && value2 !== null && value3 !== null) {
            setProposedAnswer(Math.floor(Math.random() * 3) + value1 + value2 + value3)
        }
    }, [value1, value2, value3]);

    const handleClick = (event) => {
        const correctAnswer = value1 + value2 + value3;
        const answer = (
            (correctAnswer === proposedAnswer && event.target.name === "true") ||
            (correctAnswer !== proposedAnswer && event.target.name === "false")
        );
        updateScore(answer)
        setValues();
    }


    return (
        <div>
            <h2>Mental Math</h2>
            <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
            {
                ["true", "false"].map(choice => <button key={choice} name={choice} onClick={handleClick}>{choice}</button>)
            }
        </div>
    )
}

export default Equation