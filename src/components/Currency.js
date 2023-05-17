import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {dispatch} = useContext(AppContext);

    
    const handleChange = (event) => {        
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    }

      
    return (
        <div className='alert alert-primary'>
            <select className="custom-select" id="inputGroupSelectCurrency" onChange={handleChange}>
                <option value="" name="default" defaultValue>Choose...</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>                
                </select>
        </div>
    );
};
export default Currency;