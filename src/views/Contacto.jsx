import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
    return (
        <Form className='mt-5 text-center col-11 col-sm-10 col-md-8 m-auto'>
            <h2>Cuéntanos, ¿En qué te podemos ayudar?</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="name@email.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </Form.Group>

            <Button variant="danger" type="submit">
                Enviar
            </Button>
        </Form>
    );
}


export default Contacto