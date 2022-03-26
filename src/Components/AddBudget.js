import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function AddBudget({addBudgetCallback}) {
  const [show, setShow] = useState(false);

  const [category, setCategory] = useState('')

  const [max, setMax] = useState('')

  const handleSubmit = () => {
    setShow(false)
    addBudgetCallback(category, 0, max);
   }
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Budget
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          <label>
            Category:
            <input 
              type="text" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              />
          </label>
          <label>
            Maximum Spending:
            <input 
              type="number" 
              value={max} 
              onChange={(e) => setMax(e.target.value)}
              />
          </label>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Budget
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}