import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    top: 0;

    z-index: 100;
`;

const ModalBackdrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: #00000050;
`;

const ModalBody = styled.div`
    min-width: 200px;
    padding: 16px;
    box-sizing: border-box;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-10%, -50%);

    border-radius: 3px;

    animation-name: slideInDown;
    animation-duration: 0.5s;
    animation-fill-mode: both;

    @keyframes slideInDown {
        0% {
            transform: translate(-50%, -100%);
            visibility: visible;
        }
        100% {
            transform: translate(-50%, -60%);
            }
        }
    }
`;

const Modal = ({ show, backDropClick, children }) => {
    if (!show) {
        return null;
    }

    return (
        <ModalContainer>
            <ModalBackdrop onClick={backDropClick} />
            <ModalBody className="Modal__body">{children}</ModalBody>
        </ModalContainer>
    );
};

export default Modal;
