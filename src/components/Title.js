import React, {useState} from 'react';

const Title = () => {

    const [makeColor, setmakeColor] = useState("black");
    const [size, setSize] = useState("20px")

    return (
        <div>
            <h1 style={{color: makeColor}}>Цвет</h1>

            <button onClick={() => {setmakeColor("red")}}>Change color</button>
            <button onClick={() => {setmakeColor("blue")}}>Change color</button>

            <h1 style={{fontSize:size}}>Размер</h1>

            <button onClick={() => {setSize("80px")}}>Change size</button>
            <button onClick={() => {setSize("100px")}}>Change size</button>
        </div>
    );
};

export default Title;