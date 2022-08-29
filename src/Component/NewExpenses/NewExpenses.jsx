import React from 'react'
import ExpensesForm from './ExpensesForm';
import './NewExpenses.css'

export const NewExpenses = (props) => {

      const saveExpenseItem = (enteredExpenseData) => {
        const expenseData1 = {
              ...enteredExpenseData,
              id: Math.random().toString()
        }

        props.newExpenseData(expenseData1);
      }

      
  return (
    <>
        <div className="new-expense">
            <ExpensesForm
            onSaveExpenseData = {saveExpenseItem} />
        </div>
    </>
  )
}
