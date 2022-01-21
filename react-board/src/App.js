import logo from './logo.svg';
import './App.css';
import styled, { css } from "styled-components";
import { Button, Table } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={'/favicon.png'} alt="logo" />
      </header>
      <BodyWrapper>
        <div>
          <Button>글쓰기</Button>
        </div>
        <TableContainer>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>

      </BodyWrapper>
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
