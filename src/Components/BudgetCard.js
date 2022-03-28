import { Card, ProgressBar, Stack, Button, Modal } from 'react-bootstrap';
import { currencyFormatter } from '../utils';
import AddExpense from './AddExpense';
import { useState } from 'react';

export default function BudgetCard({ name, amount, max, gray, addExpenseCallback, budgetIndex, expenses }) {
  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
  }


  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex 
          justify-content-between 
          align-items-baseline 
          fw-normal 
          mb-3">
          <div className="me-2">
            {name}
          </div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)} 
            <span className="text-muted fs-6 ms-1">/ {currencyFormatter.format(max)}</span>
          </div>
        </Card.Title>
        <ProgressBar 
          className="rounded-pill" 
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
        <AddExpense addExpenseCallback={addExpenseCallback} budgetIndex={budgetIndex}/>
        <ViewExpensesModal expenses={expenses}/>
        <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

function ViewExpensesModal({expenses}) {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
    
    <Button variant="outline-primary" className="ms-auto" onClick={handleShow}>
        View Expense
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          {JSON.stringify(expenses)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

    </>
  )
}




function getProgressBarVariant(amount, max) {
  const ratio = amount / max
  if (ratio < 0.5) return "primary"
  if (ratio < 0.75) return "warning"
  return "danger"
}