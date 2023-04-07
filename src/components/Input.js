import React, { useEffect, useState } from 'react';
import '../styles/Input.css';

function Input({ text, setText }) {
    const placeholders = ['#SPY', '#AAPL', '#AMZN', '#FB', '#GOOG', '#MSFT', '#NFLX', '#PYPL', 'Man Utd', 'New York Rangers', 'ChatGPT', 'Elon Musk', 'Donald Trump', 'FIFA', 'Goldman Sachs', 'Boston Celtics', '#GSW', 'Will Smith'];
    const [placeholder, setPlaceholder] = useState(placeholders[Math.floor(Math.random() * placeholders.length)]);

    const animatePlaceholder = (placeholder) => {
        // type out the placeholder
        let i = 0;
        const interval = setInterval(() => {
            if (i < placeholder.length) {
                setPlaceholder(placeholder.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 50) + 50);
    };

    useEffect(() => {
        // animate the placeholder
        animatePlaceholder(placeholder);

        const interval = setInterval(() => {
            // new placeholder
            let newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

            // change the placeholder
            setPlaceholder(newPlaceholder);

            // animate the placeholder
            animatePlaceholder(newPlaceholder);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="input-container">
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input"
            />
        </div>
    );
}

export default Input;