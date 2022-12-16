import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'
import Form from 'react-bootstrap/Form';
const Segment = () => {
  const options = [
    { value: 'first_name', label: 'First Name' },
    { value: 'last_name', label: 'Last Name' },
    { value: 'gender', label: 'Gender' },
    { value: 'age', label: 'Age' },
    { value: 'account_name', label: 'Account Name' },
    { value: 'city', label: 'City' },
    { value: 'state', label: 'State' }
  ]

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [option, setOption] = useState(options)
  const [selectvalue, setSelectValue] = useState([{}])

  const onChange = (e) => {
    setSelectValue(selectvalue => [...selectvalue, { value: e.value, label: e.label }])
  }

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log(message);
  };

  return (
    <div>
      <Button className="mt-3" style={{ backgroundColor: '#52b8ca', color: 'white' }} onClick={handleShow}>Save Segment</Button>
      
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header style={{ backgroundColor: '#52b8ca', color: 'white' }}>
          <Modal.Title>Save Segment</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ height: '550px' }}>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter the Name of the segment</Form.Label>
              <Form.Control type="email" placeholder="Name of the segment" id="message" name="message" onChange={handleChange} value={message}/>
            </Form.Group>
            {(selectvalue && selectvalue.length > 1) &&
              selectvalue.map((index, item) => {
                return (
                  <Select key={index} options={option} isClearable={true} />
                )
              })}

            <Select options={option} isClearable={true} onChange={(e) => onChange(e)} value={selectvalue} />
          </Form>

        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: ' #e8edf2' }} >
          <Button style={{ backgroundColor: '#61a691', color: 'white', left: '10%' }} onClick={handleClick}>
            Save the segment
          </Button>
          <Button style={{ backgroundColor: 'white', color: 'red', border: 'none' }} onClick={handleClose}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Segment