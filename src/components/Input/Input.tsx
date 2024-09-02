import './input.css'
import {ComponentPropsWithoutRef} from "react"
import {InputLabelProps} from "../../types/components/Input.ts"

export default function Input(
    {
        label,
        textarea,
        ...props
    }: InputLabelProps
) {
    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {
                textarea ?
                    <textarea className="input" {...props as ComponentPropsWithoutRef<"textarea">}></textarea> :
                    <input className="input" {...props as ComponentPropsWithoutRef<"input">} />
            }
        </p>
    )
}
