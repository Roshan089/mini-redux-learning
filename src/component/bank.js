import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amount } from '../redux/action'

const Bank = () => {
    const count = useSelector((state) => state.amount); // Adjusted to select amount from state
    const dispatch = useDispatch();

    console.log(count);
    

    return (
        <div>
            <button className="btn" onClick={() => dispatch(amount(10))}>Deposit $10</button> {/* Adding $10 */}
            <h3>Current Balance: {count}</h3>
            <button className="btn" onClick={() => dispatch(amount(-10))}>Withdraw $10</button> {/* Subtracting $10 */}
        </div>
    );
}

export default Bank;
