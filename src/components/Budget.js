import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget,dispatch, expenses} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleChange = (event) => {
    
    
    let newBudgetVar =  event.target.value
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    alert("entre event.target.value " + event.target.value + "newBudget: "+ newBudget + "budget" + budget + " totalExpenses:"+ totalExpenses);
    setNewBudget(budget);
    
    if(newBudgetVar> 20000) {       
        setNewBudget(budget); 
        alert("The entered value cannot exceed 20000");
                return;
    }else if(newBudgetVar < totalExpenses){
        setNewBudget(budget);
        alert("You cannot reduce the budget to a lower value than spent");
        return;
    }  
    
    else{
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudgetVar,
        });
        return;
    }
    

  }; 

  return (
    <div className='alert alert-secondary'>
      <input
        type='number'
        value={newBudget}
        onChange={handleChange}        
        step='10'        
      />
    </div>
  );
};

export default Budget;