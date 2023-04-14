import React, {useState} from 'react';
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const formOpenHandler=()=>{
    setFormOpen(true);
  }
  const cancelClickedHandler=()=>{
    setFormOpen(false);
  }
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setFormOpen(false);
  };
  return (
    <div className="new-expense">
      {formOpen === true ? (<ExpenseForm onCancelClick={cancelClickedHandler} onSaveExpense={saveExpenseDataHandler}/>) :
      (<button onClick={formOpenHandler}>Add New Expense</button>)} 
    </div>
  )
}

export default NewExpense