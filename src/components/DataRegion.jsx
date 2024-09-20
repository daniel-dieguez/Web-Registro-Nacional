import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import ModelRegion from '../utils/models/ModelRegion';
import Button from 'react-bootstrap/Button';

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
    


    
    const deleteRegion = async (index, id_region) => {

      if (!id_region) {
        console.log("Error: el id no se encuentra");
        return;
      }

      console.log("primer click");
  
      try {
        const urlDelete = `http://localhost:9000/region`;
  
        const response = await fetch(`${urlDelete}/${id_region}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        console.log("Se ha borrado la región con id:", id_region);
        
        // Actualizar el estado eliminando el elemento de la lista
        const updatedRegion = region.filter((_, i) => i !== index);
        setRegion(updatedRegion);
      } catch (error) {
        console.log("Error en la petición de borrar:", error);
      }
    };


  return (
    <div>
        <Table  striped bordered hover variant='dark' responsive='md' >
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
             <ModelRegion id={item.id_region}/>
            <Button variant="danger"  onClick={() => deleteRegion(index, item.id_region)}>Borrar</Button>
          </td>
        </tr>
        )}
      </tbody>
        </Table>
        <Button variant='success'>Agregar</Button>        
    </div>
  )
}
