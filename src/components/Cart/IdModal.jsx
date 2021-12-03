import {Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function IdModal({modal, idOrder}) {
    return (
        <>
        <Modal isOpen={modal}>
            <ModalHeader>
                <h3>Orden generada con éxito!</h3>
            </ModalHeader>
            <ModalBody>
                <p>El id de su orden es: {idOrder}</p>
            </ModalBody>
            <ModalFooter>
                <Link to="/">
                <button className="btn btn-primary">Volver al home</button>
                </Link>
            </ModalFooter>
        </Modal>
        </>
    )
}