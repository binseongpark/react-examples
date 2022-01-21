import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import styled, { css } from "styled-components";
import { Button, Table, Modal, Form, Pagination } from 'react-bootstrap'

import { useSelector, useDispatch } from "react-redux";
import * as types from "reducers/main"

function App() {
  const dispatch = useDispatch()
  const { mainState } = useSelector((state) => {
    return {
      mainState: state.main,
    };
  });

  useEffect(() => {
    dispatch({
      type: types.GET_LIST,
      data: {
        page: 0,
        size: 5
      }
    })
  }, [])

  const [show, setShow] = useState(false)
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log('@@@@ form.checkValidity(): ', form.checkValidity())

    event.preventDefault();
    event.stopPropagation();


    setValidated(true);

    if (form.checkValidity() === true) {
      console.log('@@@@ request')
      dispatch({
        type: types.GET_LIST
      })
    }
  };

  // temp pagination
  let totalSize = Math.ceil(21 / 5)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={'/favicon.png'} alt="logo" />
      </header>
      <BodyWrapper>
        <div>
          <Button onClick={handleShow}>글쓰기</Button>
        </div>
        <TableContainer>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {
                mainState.list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img width="30px" src={item.image} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <Pagination>
            {
              (() => {
                let items = []

                for (let i = 1; i <= totalSize; i++) {
                  items.push(
                    <Pagination.Item
                      key={i}
                      onClick={() => {
                        dispatch({
                          type: types.GET_LIST,
                          data: {
                            page: i - 1,
                            size: 5
                          }
                        })
                      }}
                    >
                      {i}
                    </Pagination.Item>)
                }

                return items

              })()
            }
          </Pagination>
        </TableContainer>

      </BodyWrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

const BodyWrapper = styled.div`
  padding: 24px;
`

const TableContainer = styled.div`
  margin-top: 1rem;
  marginb-bottom: 1rem;
`

export default App;
