import React from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Form,
} from "reactstrap";

const data = [
  { Placa: 1, Marca: "Toyota", Modelo: 2022, Serie:"Hylux" },
  { Placa: 2, Marca: "Kia", Modelo: 2021, Serie:"Sportage" },
  { Placa: 3, Marca: "Ferrari", Modelo: 2020, Serie:"Spider"},
  { Placa: 4, Marca: "Mazda", Modelo: 2019, Serie:"3"},
  { Placa: 5, Marca: "Porsche", Modelo: 2018, Serie:"Cayman"},
  { Placa: 6, Marca: "Mercedez", Modelo: 2017,Serie:"AMG"},
];

class App extends React.Component{
  state ={
    data:data,
    form:{
      Placa:'',
      Marca:'',
      Modelo: 0,
      Serie: ''
    },
    modalInsertar: false,
  };

  handlechange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true})
  }

  ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false})
  }

  render(){
    return(
      <>
      <Container>
      <br />
      <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar un Nuevo Auto</Button>
      <br /> <br/>

      <Table>
        <thead><tr><th>Placa</th>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Serie</th>
        <th>Color</th>
        <th>Acciones</th></tr></thead>
        <tbody>
          {this.state.data.map((elemento)=>(
            <tr>
              <td>{elemento.Placa}</td>
              <td>{elemento.Marca}</td>
              <td>{elemento.Modelo}</td>
              <td>{elemento.Serie}</td>
              <td><Button color='primary'>Editar</Button>{" "}
              <Button color='danger'>Eliminar</Button></td>
            </tr>
          ))}

        </tbody>
      </Table>
      </Container>

      <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
            <div><h3>Insertar Registro</h3></div>
        </ModalHeader>

        <ModalBody>
            <FormGroup>
              <label>Placa</label>
              <input className="form-control" name="placa" type="text" onChange={this.handlechange}/>
            </FormGroup>
            <FormGroup>
              <label>Marca</label>
              <input className="form-control" name="placa" type="text" onChange={this.handlechange}/>
            </FormGroup>
            <FormGroup>
              <label>Modelo</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>
            <FormGroup>
              <label>Serie</label>
              <input className="form-control" name="placa" type="text" onChange={this.handlechange}/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
        </ModalFooter>
      </Modal>
      </>)
  }
}
export default App;
