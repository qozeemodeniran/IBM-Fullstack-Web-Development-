
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            Budget: £<input type='number' 
            value={budget}
            max={20000}></input>
        </div>
    );
};
export default Budget;