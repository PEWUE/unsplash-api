import React from 'react';
import {Modal} from 'react-bootstrap';
import './ModalWindow.css';

const ModalWindow = ({show, onHide, authorInfo, authorInsta, location, image, alt}) => {
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header className="modal-header">
                <h3>{authorInfo}</h3>
                <p className="instagram-username">@{authorInsta}</p>
            </Modal.Header>
            <Modal.Body>
                <img className="modal-image" src={image} alt={alt}/>
            </Modal.Body>
            <Modal.Footer>
                {location}
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindow;
