import React, { useCallback, useState } from 'react'

const functions = new Set()
const Callback = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const addCount1 = useCallback(() => setCount(count + 1), [count])
    const addCount2 = useCallback(() => setCount2(count2 + 1), [count2])

    const logName = () => console.log('Name')

    functions.add(addCount1)
    functions.add(addCount2)

    console.log(functions)

    return (
        <div>
            {count}
            <button onClick={addCount1} >Add Count</button>
            <button onClick={addCount2} >Add Count2</button>
            <button onClick={logName} >Log name</button>
        </div>
    )
}

export default Callback