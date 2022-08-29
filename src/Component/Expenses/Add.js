import React from 'react';
import '../Expenses/Add.css';
import Multi from '../Expenses/Multi.js';
import Card from '../UI/Card.js'

const Add = (props) => {

  
  return (
    <Card className='expense-item'>
      <Multi date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </Card>
  )
}

export default Add