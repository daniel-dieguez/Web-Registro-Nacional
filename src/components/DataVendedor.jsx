import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function DataVendedor() {


    const [vendedor, setVendedor] = useState ([]);

    const urlVendedor = 'http://localhost:9000/Vendedor/vendedor/activos';

    useEffect(() => {
      axios.get(urlVendedor).then(response => {
        console.log(response.data);
        setVendedor(response.data);
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
      <th>Gmail</th>
      <th>SuperVisor</th>
      <th>Correo Supervisor</th>
      <th>Region</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
    {vendedor.map((item, index)=>
    <tr key={index}>
      <td>{item.id_vendedor}</td>
      <td>{item.nombre_vendedor}</td>
      <td>{item.apellido_vendedor}</td>
      <td>{item.email_vendedor}</td>
      <td>{item.superVisor.nombre_super}</td>
      <td>{item.superVisor.email_super}</td>
      <td>{item.superVisor.region.id_region}</td>
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
