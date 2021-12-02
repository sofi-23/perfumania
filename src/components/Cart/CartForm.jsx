import {  Button, Form, FormGroup, Label, Input, FormFeedback  } from 'reactstrap';
import { useState } from "react";
import validator from 'validator';//Usé la librería "Validator", para validar los emails para que se habilite/deshabilite el botón 

const CartForm = (props) => {
    const [emailTwo, setEmailTwo] = useState("");
    const [emailValidation, setEmailValidation] = useState(false) 
    const handleFirstEmail = (e) => {
        
        let email = e.target.value
        if (validator.isEmail(email)){
            setEmailValidation(true)
        }else {
            setEmailValidation(false)
        }
    }

    const handleSecondEmail= (e) => {
            setEmailTwo(e.target.value)
        }
        
        const checkForm = () => { //checkea que el formulario esté completo y los mails iguales, para que aparezca el boton.
            if (props.formData.name!== "" && props.formData.email !== "" && emailTwo !== "" && props.formData.phone!== "" && props.formData.email === emailTwo && emailValidation) {     
                return true
            }else{
                return false              
            }           
        }

    return ( 
        <>
            <Form className="m-auto" onSubmit={props.createOrder} onChange={props.handleChange}>
                    <FormGroup className="mt-3">
                        <Label for="nameText">Nombre y apellido:</Label>
                        <Input type="text" name="name" id="nameText" defaultValue={props.formData.name} />
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <Label for="number">Número de teléfono:</Label>
                        <Input type="text" name="phone" id="number" defaultValue={props.formData.phone} />
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <Label for="email">Correo electrónico:</Label>
                        <Input  onChange={handleFirstEmail} invalid={emailTwo!==props.formData.email} valid={emailValidation} type="email" name="email" id="email" defaultValue={props.formData.email} />
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <Label for="email2">Repita su correo electrónico:</Label>
                        <Input  onChange={handleSecondEmail} invalid={emailTwo!== props.formData.email} valid={emailValidation}  type="email" name="email2" id="email2" defaultValue={emailTwo} />  
                        <FormFeedback> Los correos deben coincidir! </FormFeedback>
                    </FormGroup>
                    {  checkForm() ? <Button className="mt-3"  > Realizar compra </Button> : <Button disabled className="mt-3"  > Realizar compra </Button> }
                </Form>
        </>
    )
}

export default CartForm;