import { useRef } from 'react'

export function Focus() {
    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.focus()
    }

    return <div>
        <h1>Input Focus</h1>

        <input ref={inputRef} type="text" placeholder="enter something here" />
        <button onClick={handleClick} >Focus on input</button>
    </div>
}