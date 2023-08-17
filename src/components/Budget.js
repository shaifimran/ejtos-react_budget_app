import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch, currency} = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (num) => {
        if(num>20000){
            alert("Budget is exceeding the limit of 20000");
        }

       
        else if(num>=0){
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(num),
        });
    }
};

function alertBudget(num){
    if(num < totalExpenses){
        alert("Budget is lower than the spending!");
    }
};


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ size: 10}}
                        onChange={(event) => changeBudget(event.target.value)}
                        onBlur={(event)=>alertBudget(event.target.value)}
             ></input></span>
        </div>
    );
};
export default Budget;