import React,{useState} from "react";
import {staff} from "../data";
import Table from 'react-bootstrap/Table';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function RenderRow(props){
    return (<tr>
        <td>{props.teacher.name}</td><td>{props.teacher.age}</td><td>{props.teacher.department}</td><td>{props.teacher.location}</td>
    </tr>)
}

function Teachers(){
    const[teachers,setTeachers] = useState(staff);
    return (
       <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
        {teachers.map((e)=><RenderRow teacher={e}/>)}
        </tbody>
       </Table>
    )
}

export default Teachers;


