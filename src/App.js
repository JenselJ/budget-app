import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import AddBudget from './Components/AddBudget';
import BudgetCard from './Components/BudgetCard';
import { Button } from 'react-bootstrap';
import Example from './Components/AddBudget';
import React, {useState} from 'react';

function App() {
  
  const [expenseAmount, setExpenseAmount] = useState('')

  const [budgets, setBudget] = useState(newBudgets)

  function addBudget(name, amount, max) {
    setBudget([...budgets, {name, amount, max, expenses: []}])
  }

  function addExpense(budgetIndex, amount, expenseName) {
    const budgetsList = JSON.parse(JSON.stringify(budgets))

    console.log( budgetIndex, amount, expenseName, budgetsList)

    budgetsList[budgetIndex].expenses.push({
      amount: amount,
      name: expenseName
    })
    
    setBudget(budgetsList)
  }

  return <Container className="my-4">
    <Stack direction='horizontal' gap='2' className='mb-4'>
      <h1 className="me-auto">Budgets</h1>
      <AddBudget addBudgetCallback={addBudget}/>
      <Button variant="outline-primary">Add Expense</Button>
    </Stack>
    <div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "1rem", 
        alignItems: "flex-start"
        }}
      >
        {/* <BudgetCard 
          name="Entertainment" 
          gray
          amount={200} 
          max={1000} /> */}

  {budgets.map((budget, index) => (
    <BudgetCard 
            name={budget.name}
            addExpenseCallback={addExpense}
            budgetIndex={index}
            expenses={budget.expenses}
            gray
            amount={
              budget.expenses.length > 0 ?
                budget.expenses.map(expense => expense.amount).reduce((a,b) => a + b) :
                0
            } 
            max={budget.max} />
  ))}
    </div>
  </Container>


}


const newBudgets = [
  {
    name: "Entertainment",
    max: 1000,
    expenses: [{name:"lunch", amount: 20}, {name: "dinner", amount: 50}, {name: "haircut", amount: 30}]
  }
]


export default App;
