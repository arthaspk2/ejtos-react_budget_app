import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <select className="custom-select" id="inputGroupSelect" >
                        <option defaultValue>Choose...</option>
                <option value="Dollar" name="Dollar">$ Dollar</option>
                <option value=",Pound" name="Pound">£ Pound</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Ruppee" name="Ruppee">₹ Ruppee</option>                
                </select>
        </div>
    );
};
export default Currency;