import React, {useState} from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card.js';

const ExpenseItem = (props) => {
  // const[title, setTitle]=useState(props.title);
  // const clickHandler=()=>{
  //   setTitle('Updated!');
  //   console.log("Clicked!");
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
