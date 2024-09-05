import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export default function DataRegion() {


    const [idRegion, setIdRegion] =useState('');
    const [region, setRegion] = useState([]);

    const urlRegion = 'http://localhost:9000/region';

    useEffect(() => {
        axios.get(urlRegion)
        .then(response =>{
            console.log(response.data);
            setRegion(response.data);
        }).catch(error =>{
            console.log("Error en la peticion de region");
        })
        
      
    }, [])
    



  return (
    <div>
        <Table  striped border hover variant='dark' responsive='md' >
        <thead>
        <tr>
          <th>Region</th>
          <th>Id de Region</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {region.map((item, index)=>
        <tr key={index}>
          <td>{item.nombre_region}</td>
          <td>{item.id_region}</td>
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
