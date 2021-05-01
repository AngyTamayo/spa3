import React, { Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

class ModalProducto extends Component{
state={
    modalInsertar: false, 
}
    
modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
}
      
  render(){
    const {form}=this.state;
    return (
        <>
        <br></br>
    <button id="boton" className="btn btn-success" onClick={()=>this.modalInsertar()}>Agregar Producto</button>

        <div style={{margin: '40px'}}> 
            <br>
            </br>
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                  <label id="titulo">Agregar Producto</label>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" />
                    <br />
                    <label>Precio</label>
                    <input className="form-control" type="text" name="precio" id="precio" />
                    <br />
                    <label>Descripcion</label>
                    <input className="form-control" type="text" name="descripcion" id="descripcion" />
                    <label>Imagen</label>
                    <input className="form-control" type="file" name="imagen" id="imagen" />
                    <br />
                  </div>
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-success" onClick={()=>this.modalInsertar()}>
                        Insertar
                    </button>
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
        </div>
        </>   
    )
 }    
}
export default ModalProducto;