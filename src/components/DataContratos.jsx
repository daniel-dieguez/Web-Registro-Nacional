import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export default function DataContratos() {

const [contrato, setContrato] = useState([]);


const urlContrato = "http://localhost:9000/contrataciones/viewAll";

useEffect(() => {
  
    axios.get(urlContrato).then(response =>{
        console.log(response.data);
        setContrato(response.data);
    })

}, [])


  return (
    <div>
        <Table  striped border hover variant='dark' responsive='md' >
        <thead>
        <tr>
          <th>Id Vendedor</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Id Contrato</th>
          <th>Detalles</th>
          <th>Region</th>
          <th>Supervisor</th>
        </tr>
      </thead>

      <tbody>
        {contrato.map((item, index)=>
        <tr key={index}>
          <td>{item.vendedor.id_vendedor}</td>
          <td>{item.vendedor.nombre_vendedor}</td>
          <td>{item.vendedor.apellido_vendedor}</td>
          <td>{item.id_contrato}</td>
          <td>{item.detalles}</td>
          <td>{item.vendedor.superVisor.region.nombre_region}</td>
          <td>{item.vendedor.superVisor.nombre_super}</td>
          <td>
            <button>Actualizar</button>
            <button>Borrar</button>
          </td>
        </tr>
        )}
      </tbody>
        </Table>
        <button>Agregar</button>
    </div>
  )
}
