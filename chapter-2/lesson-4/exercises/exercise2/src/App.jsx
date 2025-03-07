import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game.jsx";


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <Game/>
        </div>
    );
};

export default App;