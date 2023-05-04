import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, remaining, totalExpenses, Currency } = useContext(AppContext);
  const [budjett, setBudgett] = useState("");

  const handleBudgetChange = (event) => {
    const newBudgett = event.target.value;
    
    if (newBudgett > 20000) {
        alert("Value cannot exceed remaining funds £"+remaining);
    } else if (newBudgett < 960) {
        alert("You cannot reduce the budget value lower than spending");
    }  
    setBudgett(newBudgett);
  }

  return (
    <div className='alert alert-secondary'>
      Budget: {Currency}
      <input 
        type='number' 
        value={budget}
        step={10}
        onChange={handleBudgetChange} 
      />
    </div>
  );
};

export default Budget;
