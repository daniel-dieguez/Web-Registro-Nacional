import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import axios from 'axios';

function ModelRegion({id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [registros, setRegistros] = useState('');

    const upDateHanled = async (e) =>{
        e.preventDefault();
        if(!registros) {
                Swal.fire({
                  icon: "error",
                  title: "¡Agrega el titulo!",
                  text: "Debes de agregar el dato de la nueva region",
                });
                return;
        }

        try{

            const response = await axios.put(`http://localhost:9000/region/${id}`,{
                nombre_region: registros
            },{
                headers:{
                'Content-Type': 'application/json'
            }
            });
            console.log("se actualizo", response);
            Swal.fire({
                icon: "success",
                title: "Actualizacion realizada",
                text: "Recarga la pagina para ver los cambios",
              });
            handleClose();


        }catch (error) {
            console.log("error bro");
            console.error("Error:", error);
            Swal.fire({
              icon: "error",
              title: "Error en la peticion",
              text: "Hubo un error, intentalo nuevamente.",
            });
          }
    

    };



  return (
    <div>
            <Button variant="primary" onClick={handleShow}> Actualizar </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar region</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2" controlId="Ingrese nombre de nueva region">
                            <Form.Label>Actualizar Nombre region</Form.Label>
                            <Form.Control col={3}
                                type="text"
                                placeholder="Ingrese nombre de nueva region"
                                autoFocus
                                onChange={e => setRegistros(e.target.value)}
                            />
                        </Form.Group>                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={upDateHanled}>
                        guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
  );
}
export default ModelRegion;
