import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ModalProducto from '../Components/Productos/ModalProducto'
import CardProducto from '../Components/Productos/CardProducto'


export default function Productos (){
    return (
        <>
        <ModalProducto></ModalProducto>
        <CardProducto></CardProducto>
        </>
    )
}

