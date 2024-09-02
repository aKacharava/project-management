import {ComponentPropsWithoutRef} from "react";

interface CommonProps {
    label: string;
}

export interface InputProps extends CommonProps, ComponentPropsWithoutRef<"input"> {
    textarea?: false;
}

export interface TextareaProps extends CommonProps, ComponentPropsWithoutRef<"textarea"> {
    textarea: true;
}
