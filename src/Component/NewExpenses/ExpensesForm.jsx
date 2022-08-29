import React from 'react';
import { useState } from 'react';
import './ExpensesForm.css';

const ExpensesForm = (props) => {

    const [newTitle, setNewTitle]= useState();
    const [newAmount, setNewAmount] = useState();
    const [newData, setNewData] = useState();


    const changeTitle = (event) => {
        setNewTitle(event.target.value);
    }
    const changeAmount = (event) => {
        setNewAmount(event.target.value);
    }
    const changeData = (event) => {
        setNewData(event.target.value);
    }

    const changeSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            date: new Date (newData),
            title: newTitle,
            price: newAmount,
            
        }

        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewData('');
    }
    

    
    return (
        <form onSubmit={changeSubmit}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={changeTitle}  />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={newAmount} onChange={changeAmount}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={newData} onChange={changeData}  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpensesForm