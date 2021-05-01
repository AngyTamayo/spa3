import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


const url = "http://localhost:4000/roles/"
class Roles extends Component{
state={
    data:[]
}
peticionGet= async ()=>{
    await Axios.get(url).then(response=>{
    this.setState({data: response.data});
    }).catch(error=>{
    console.log(error.mesage)
    })
}
componentDidMount() {
    this.peticionGet();
}
  render(){
    return (
        <>
        <div style={{margin: '40px'}}> 
            <br>
            </br>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.data.map((val) =>{
                    return(
                        <tr>
                        <td>{val.id_rol}</td>
                        <td>{val.cargo}</td>
                        <td>{val.salario}</td>
                        <td>
                            <button className="btn btn-primary" ><FontAwesomeIcon icon={faEdit}/></button>
                            {" "}
                            <button className="btn btn-danger" ><FontAwesomeIcon icon={faTrashAlt}/></button>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>        
        </div>
        </>   
    )
 }    
}
export default Roles;