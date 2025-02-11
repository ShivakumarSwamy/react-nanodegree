import Score from "./Score.jsx";
import Equation from "./Equation.jsx";
import {useState} from "react";


const Game = () => {
    const [score, setScore] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);

    const trackScore = (answer) => {
        if (answer) {
            setScore(score + 1)
        }
        setQuestionCount(questionCount + 1)
    }

    return (
        <div className="game">
            <Equation updateScore={trackScore}/>
            <Score numCorrect={score} numQuestions={questionCount}/>
        </div>
    )
}

export default Game