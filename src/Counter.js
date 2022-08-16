import { useState } from "react"

export default function Counter() {
    const initial = 0
    const [count,setCount] = useState(initial)

    function handleAdd() {
        setCount(prevCount => prevCount + 5)
    }

    function handleSubstract() {
        setCount(prevCount => prevCount - 1)
    }

    function handleInitialize() {
        setCount(0)
    }
    
    return (
        <div className="counter-comp-wrap">
            <div className="displayer-wrap">
                <h1>Counter App : </h1>
                <h1 data-testid="count">{count}</h1>
            </div>
            <div className="btns-wrap">
                <button className="add-btn" onClick={handleAdd}>Add</button>
                <button className="substract-btn" onClick={handleSubstract}>Substract</button>
                <button className="init-btn" onClick={handleInitialize}>Initialize</button>
            </div>

        </div>
    )
}