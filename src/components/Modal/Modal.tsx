import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import {ModalProps} from "../../interfaces/components/Modal.ts";
import Button from "../Button/Button.tsx";

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
                <dialog ref={dialog} className="backdrop:bg-stone-800/90 p-4 rounded-md shadow-md">
                    {children}
                    <form method="dialog" className="mt-4 text-right">
                        <Button label={buttonCaption} />
                    </form>
                </dialog>,
                modalRoot
            )
        )
    }
)
