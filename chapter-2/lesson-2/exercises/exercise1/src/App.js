import logo from "./logo192.png";
import "./App.css";

const App = () => {
    const name = "React";
    const facts = {
        releaseDate: "May 2013",
        language: "JavaScript",
        license: "MIT",
    };

    return (
        <div className="container">
            <img src={logo} alt={`${name} logo`}/>
            <h1>{name}</h1>
            <code>{`Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`}</code>
        </div>
    );
};

export default App;
