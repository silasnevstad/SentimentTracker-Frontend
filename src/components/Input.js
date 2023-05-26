import React, { useEffect, useState } from 'react';
import '../styles/Input.css';

function Input({ text, setText, loading }) {
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
        }, Math.floor(Math.random() * 50) + 70);
    };

    useEffect(() => {
        // animate the placeholder
        animatePlaceholder(placeholder);

        const interval = setInterval(() => {
            // new placeholder, different from the current one
            let newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
            while (newPlaceholder === placeholder) {
                newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
            }

            // animate the placeholder
            animatePlaceholder(newPlaceholder);
        }, 3000);
        return () => clearInterval(interval);
    }, [placeholder]);


    return (
        <div className="input-container">
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={`input ${loading ? 'loading' : ''}`}
            />
        </div>
    );
}

export default Input;