import React,{useState} from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableContent from './components/TableContent';

const App=()=> {
const [load, setLoad] = useState(false);
  const loadTableContents=(e)=>{
    e.preventDefault();
    setLoad(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        Sample Table
      </header>
      <>
      <p style={{alignContent:'flex-start'}}>
      we want you to create a simple page with a table. By default, the table should be empty.
      </p>
      </>
      <>
      <Button variant="primary" style={{alignItems:'flex-end', marginLeft:'550px'}} onClick={loadTableContents}> Load Data</Button>
      </>
      <>
      {load ?<TableContent/>:<></>}
      </>
    </div>
  );
}

export default App;
