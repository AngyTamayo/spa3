import React, { Component, useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from '../../fotos/uno.jpg';
import './Card.css'

class CardProducto extends Component{
  render(){
    return (
        <>
        <div class="contenedor" style={{margin: '40px'}} > 
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={logo1} ></img>
                <div class="card-body">
                    <h5 class="card-title">Portatil</h5>
                    <p class="card-text">descripcion del producto que se esta poniendo en la base de datos</p>
                    <h6>$2.500.000</h6>
                </div>
                <div></div>
            </div>
            <div  class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={logo1} ></img>
                <div class="card-body">
                    <h5 class="card-title">Portatil</h5>
                    <p class="card-text">descripcion del producto que se esta poniendo en la base de datos</p>
                    <h6>$2.500.000</h6>
                </div>
                <div></div>
            </div>
            <div  class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={logo1} ></img>
                <div class="card-body">
                    <h5 class="card-title">Portatil</h5>
                    <p class="card-text">descripcion del producto que se esta poniendo en la base de datos</p>
                    <h6>$2.500.000</h6>
                </div>
                <div></div>
            </div>
            <div  class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={logo1} ></img>
                <div class="card-body">
                    <h5 class="card-title">Portatil</h5>
                    <p class="card-text">descripcion del producto que se esta poniendo en la base de datos</p>
                    <h6>$2.500.000</h6>
                </div>
                <div></div>
            </div>
            <div  class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={logo1} ></img>
                <div class="card-body">
                    <h5 class="card-title">Portatil</h5>
                    <p class="card-text">descripcion del producto que se esta poniendo en la base de datos</p>
                    <h6>$2.500.000</h6>
                </div>
                <div></div>
            </div>
            <div  class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={logo1} ></img>
                <div class="card-body">
                    <h5 class="card-title">Portatil</h5>
                    <p class="card-text">descripcion del producto que se esta poniendo en la base de datos</p>
                    <h6>$2.500.000</h6>
                </div>
                <div></div>
            </div>
                
        </div>
        </>   
    )
 }    
}
export default CardProducto;