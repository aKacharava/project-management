import {ComponentPropsWithoutRef} from "react";
import {InputLabelProps} from "../../types/components/Input.ts";

export default function Input(
    {
        label,
        textarea,
        ...props
    }: InputLabelProps
) {
    return(
        <p>
            <label>{label}</label>
            {textarea ? <textarea {...props as ComponentPropsWithoutRef<"textarea">}></textarea> : <input {...props as ComponentPropsWithoutRef<"input">} />}
        </p>
    )
}
