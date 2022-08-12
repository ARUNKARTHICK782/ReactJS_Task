import React,{useState} from "react";
import {student} from "../data";
import Table from 'react-bootstrap/Table';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function RenderRow(props){
    return (<tr>
        <td>{props.stu.name}</td><td>{props.stu.age}</td><td>{props.stu.department}</td><td>{props.stu.location}</td>
    </tr>)
}

function Students(){
    const[students,setStudents] = useState(student);
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Location</th>
                </tr>
            </thead>
        <tbody>
        {students.map((e)=><RenderRow stu={e}/>)}
        </tbody>
        
        </Table>
    )
}

export default Students;