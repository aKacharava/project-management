import {ReactNode} from "react";

export interface ModalProps {
    children: ReactNode;
    buttonCaption: string;
}

export interface ModalHandle {
    open: () => void;
    close: () => void;
}
