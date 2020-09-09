import React, {
    useEffect,
    useState
} from 'react';
import {
    Table
} from 'react-bootstrap';
import axios from 'axios';
import './TableContent.css';

const TableContent = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://aimtell.com/files/sites.json',{
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
          }).then(res => {
            setRecords(res.data.sites);
        })
    },[])


    return (
        <div className="table_content">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((rec, idx)=>(
                    <tr>
                    <td>{rec.id}</td>
                    <td>{rec.name}</td>
                        <td>{rec.url}</td>
                    </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>
    )

}

export default TableContent;