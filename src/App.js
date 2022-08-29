import React, { useState } from 'react';
import Expenses from './Component/Expenses/Expenses';
import { NewExpenses } from './Component/NewExpenses/NewExpenses';


let DUMMY_DATA = [
  {
    id: '1',
    date: new Date(2022, 2, 11),
    title: 'School Fees',
    price: 400
  },
  {
    id: '2',
    date: new Date(2022, 8, 20),
    title: 'Library Fees',
    price: 100
  },
  {
    id: '3',
    date: new Date(2022, 6, 21),
    title: 'Bus Fees',
    price: 300
  },
  {
    id: '4',
    date: new Date(2022, 11, 29),
    title: 'Stationary',
    price: 700
  },
];


const App = () => {
    
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const newExpensesData = (enteredNewData) => {
    const updateData = [enteredNewData, ...expenses];
      setExpenses(updateData);
  };
  return (
    

      <div>
        <NewExpenses newExpenseData = {newExpensesData} />
        <Expenses item={expenses} />
      </div>

  )
}

export default App

