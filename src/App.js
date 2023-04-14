import React, {useState} from 'react';
import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Dosa and Tandoori", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e2', title: "Books", amount: 1000, date: new Date(2022, 3, 1) },
  { id: 'e3', title: "Lunch", amount: 200, date: new Date(2021, 4, 28) },
  { id: 'e4', title: "Dosa and Tandoori", amount: 294.67, date: new Date(2020, 5, 5) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{   
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </>
  );
}

export default App;
