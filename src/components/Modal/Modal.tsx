import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import {ModalProps} from "../../interfaces/components/Modal.ts";

export const Modal= forwardRef(
    function Modal(
        {
            children,
            buttonCaption
        }: ModalProps,
        ref
    ) {
        const dialog = useRef<HTMLDialogElement>(null);

        const modalRoot = document.querySelector('#modal-root');

        useImperativeHandle(ref, () => ({
            open: () => {
                dialog.current?.showModal();
            },
            close: () => {
                dialog.current?.close();
            }
        }))

        if (!modalRoot) {
            return null;
        }

        return(
            createPortal(
                <dialog ref={dialog}>
                    {children}
                    <form method="dialog">
                        <button>{buttonCaption}</button>
                    </form>
                </dialog>,
                modalRoot
            )
        )
    }
)
