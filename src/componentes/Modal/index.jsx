import React, { useEffect } from 'react';

import Portal from './Portal';
import { Overlay, Dialog } from './styled';

const Modal = ({children, open, onClose}) => {
    useEffect(() => {
        function onEsc(e) {
            if (e.keyCode === 27) onClose();

            return () => {
               window.removeEventListener('keydown', onEsc); 
            };
        }
        window.addEventListener('keydown', onEsc);
    }, [onClose]);
    if (!open) return null;
    function onOverLayClick(){
        onClose();
    }
    function onDialogClick(e) {
        e.stopPropagation();
    }
       return (
        <Portal>
            <Overlay onClick={onOverLayClick}>
                <Dialog onClick={onDialogClick}> {children}</Dialog>
            </Overlay>
        </Portal>
       );
     };
export default Modal;