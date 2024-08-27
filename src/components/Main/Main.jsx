import React, { useState } from 'react';
import './Main.css';


function Main() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // if (count < 10000) // лимит до 10000 
        {
            const newCount = count + 1;
            setCount(newCount);
            if (newCount % 100 === 0) { // Проверка, кратно ли новое значение 100
                alert(`Число достигло ${newCount}!`);
            }
        }
    };

    const resetClick = () => {
        setCount(0);
    }

    return (
        <div className="app">
            <div className='app_button'>
                 <button className="increment-button" onClick={handleClick}>
                Click me!
            </button>
            <button onClick={resetClick}>Reset</button>
            </div>
            <div className="count">
            Current number: {count}
            </div>
        </div>
    );
}

export default Main;
