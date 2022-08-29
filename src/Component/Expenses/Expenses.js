import React from 'react';
import Add from './Add';
import './Expenses.css';



const Expenses = (props) => {


    return (
        <div className='expenses'>
            {
                props.item.map(
                    expenses => (
                        <Add
                            date={expenses.date}
                            title={expenses.title}
                            price={expenses.price}
                        />
                    )
                )
            }

        </div>
    )
}

export default Expenses