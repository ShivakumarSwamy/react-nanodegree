import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    // this is invoked all the time, as no dependency is used
    // side effect cleanup can be used for cleanup for subscriptions, asynchronous calls, or DOM listeners
    useEffect(() => {
        console.log("This is the side effect");

        return () => {
            console.log("The component re-rendered. This is part of the cleanup before the next effect.")
        }
    });

    return (
        <>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
