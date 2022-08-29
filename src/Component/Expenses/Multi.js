import React from 'react';
import './Multi.css';

const Multi = (props) => {

    const month = props.date.toLocaleString('en-us', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-us', {day: '2-digit'})

  return (
    <div>
        <div className='multi'>
        <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>
      </div>
    </div>
  );
}

export default Multi