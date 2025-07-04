import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItems(props) {

    return (
        <div className="expense-item">
            <div>
                <ExpenseDate lulu={props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>

    )
}
export default ExpenseItems;
