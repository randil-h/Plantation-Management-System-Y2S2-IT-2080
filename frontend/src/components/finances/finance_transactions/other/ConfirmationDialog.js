import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';

import {
    TrashIcon

} from '@heroicons/react/24/outline';

const DeleteButton = ({ id, handleDeleteTransaction }) => {
    const [showModal, setShowModal] = useState(false);
    const isResizing = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            isResizing.current = true;
            setTimeout(() => {
                isResizing.current = false;
            }, 100); // Adjust this delay as needed
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleConfirm = () => {
        setShowModal(false);
        handleDeleteTransaction(id);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleOpenConfirm = () => {
        if (!showModal && !isResizing.current) {
            setShowModal(true);
        }
    };

    return (
        <>
            <Button className="flex items-center" onClick={handleOpenConfirm}>
                <TrashIcon className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500" aria-hidden="true" />
            </Button>

            <Modal show={showModal} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this record?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>No</Button>
                    <Button variant="primary" onClick={handleConfirm}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteButton;
