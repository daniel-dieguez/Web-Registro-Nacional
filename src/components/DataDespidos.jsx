
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function DataDespidos() {


    const [despidos, setDespidos] = useState([]);

    const urlDespido = 'http://localhost:9000/renuncia/viewAll';


    useEffect(() => {

        axios.get(urlDespido).then(response =>{
            console.log(response.data);
            setDespidos(response.data);
        })
      
    }, [])

    const formatearFecha = (fechas) => {
      const fecha = new Date(fechas);
      return fecha.toLocaleDateString('es-ES'); // Formato dia/mes/año
    };
    


  return (
<div>
        <Table  striped border hover variant='dark' responsive='md' >
        <thead>
        <tr>
          <th>Id Renuncia</th>
          <th>fecha</th>
          <th>Id vendedor</th>
          <th>nombre vendedor</th>
          <th>Amotivo</th>
          <th>Region</th>
        </tr>
      </thead>

      <tbody>
        {despidos.map((item, index)=>
        <tr key={index}>
          <td>{item.id_renuncia}</td>
          <td>{formatearFecha(item.fecha)}</td>
          <td>{item.vendedor.id_vendedor}</td>
          <td>{item.vendedor.nombre_vendedor}</td>
          <td>{item.motivo}</td>
          <td>{item.vendedor.superVisor.region.nombre_region}</td>
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
