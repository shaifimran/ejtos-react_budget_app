import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch } = useContext(AppContext);
    const changeBudget = (num) => {
        if(num>=0){
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(num),
        });
    }
};
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => changeBudget(event.target.value)}
                        
             ></input></span>
        </div>
    );
};
export default Budget;
