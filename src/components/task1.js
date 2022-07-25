import React, {useState} from "react";




const Task1 = () => {
    const [count, setCount] = useState(0);

    return (
        <div>

            <button onClick={() => {setCount(count+1)}}>Добавить 1</button>
            <p>{count}</p>
            <button onClick={() => {setCount(count-1)}}>Уменьшить на 1</button>


          </div>
    )
};

export default Task1;