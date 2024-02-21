import {useState} from 'react'

import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <div> {count}</div>
                <button onClick={() => setCount((count) => count + 1)}>
                    Increment
                </button>
                <button onClick={() => setCount((count) => count - 1)}>
                    Decrement
                </button>
                <button onClick={() => setCount((count) => 0)}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default App
