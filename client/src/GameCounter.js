import React, {useState} from 'react'

function GameCounter() {
    const [num, setNum] = useState(0);


const upCount = () => {
    if(num<10)
    {
    setNum((num)+1);
    }
}

const downCount = () => {
    if(num>0)
    {
        setNum(num - 1);
    }
}



    return(
        <div>
            <input  onChange = {e => setNum(e.target.value)} type="text" value={num} ></input>
            <button onClick={upCount}>Add</button>
            <button onClick={downCount}>Subtract</button>
        </div>
    )
}

export default GameCounter;