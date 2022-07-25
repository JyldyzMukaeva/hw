import React, {useState} from 'react';

const Task2 = () => {
    const [count, setCount] = useState(0);
    return (
        <div>

            <button onClick={()=>setCount(count+1)}>Добавить 1</button>
            <button onClick={()=>setCount(count+5)}>Добавить 5</button>
            <button onClick={()=>setCount(count+10)}>Добавить 10</button>
            <p>{count}</p>

        </div>
    );
};

export default Task2;