import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice'; 
import { useState } from 'react';

export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    function resetAll() {
        dispatch(reset());
        setIncrementAmount(0);
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>   
            </div>
            <button onClick={resetAll}>reset</button>
        </section>
    );
}

// Dispatch is the way that we trigger a state change.
// useSelector is the hook that we use to select a value from the store.
