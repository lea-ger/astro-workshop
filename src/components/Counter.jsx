import {useState} from 'react';

export default function Counter({initial = 0}) {
    const [count, setCount] = useState(initial);
    return (
        <div className="flex items-center gap-4">
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            <span style={{minWidth: 32, textAlign: 'center'}}>
                {count}
            </span>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

