import React from 'react'
import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.lulu.toLocaleString('en-US', { month: 'long' });
    const day = props.lulu.toLocaleString('en-US', { day: '2-digit' });
    const year = props.lulu.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
export default ExpenseDate;
