import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export default function DataSuperv() {

    const [supervisor,setSuper] =useState ([]);

    const urlSuer = 'http://localhost:9000/supervisor';

    useEffect(() => {
     
        axios.get(urlSuer).then(response =>{
            console.log(response.data);
            setSuper(response.data);
        })


    }, [])
    


  return (
    <div>

        <Table  striped bordered hover variant='dark' responsive='md' >
        <thead>
        <tr>
          <th>Id Supervisor</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Gmail</th>
          <th>Region</th>

          <th></th>
        </tr>
      </thead>

      <tbody>
        {supervisor.map((item, index)=>
        <tr key={index}>
          <td>{item.id_supervisor}</td>            
          <td>{item.nombre_super}</td>
          <td>{item.apellido_super}</td>
          <td>{item.email_super}</td>
          <td>{item.region.nombre_region}</td>
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

  )}
