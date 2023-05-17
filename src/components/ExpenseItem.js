import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td ><img src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png" style={{ marginLeft: '2rem' , size: 20}} alt="+" height="40px" width="40px" onClick={event=> increaseAllocation(props.name)}/></td>
        <td ><img src="https://static.vecteezy.com/system/resources/previews/009/267/401/original/minus-sign-icon-free-png.png" style={{ marginLeft: '2rem' , size: 20}} alt="-" height="40px" width="40px" onClick={event=> decreaseAllocation(props.name)}/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
