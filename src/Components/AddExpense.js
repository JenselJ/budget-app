import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'; 


export default function AddExpense({addExpenseCallback, budgetIndex}) {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const [expensesName, setExpensesName] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    setShow(false);
    console.log(addExpenseCallback);
    addExpenseCallback(budgetIndex, Number(amount), expensesName);
  }

  return (
    <>
      <Button variant="outline-primary" className="ms-auto" onClick={handleShow}>
        Add Expense
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          <label>
            Name:
            <input 
              type="text"
              onChange={(e) => setExpensesName(e.target.value)}
            />
          </label>
          <label>
            Amount:
            <input 
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
