import React,{useState} from "react";
import Students from "./Students";
import Teachers from "./Teachers";
import Button from 'react-bootstrap/Button';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



function ShowOnClick(props){
    if( props.person === 0)
    return <Students/>
    else
    return <Teachers/>
}


function HomePage(){
    const [role,setRole] = useState(0);
    return (
        <div style={{ margin: "auto"}}>
            <Button  variant="secondary" onClick={()=>setRole(0)}>Show Students</Button>
            <Button variant = "secondary" onClick={()=>setRole(1)}>Show Teachers</Button>
            <ShowOnClick person={role}/>
        </div>
    )
}

export default HomePage;