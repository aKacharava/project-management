import './input.css'
import {ComponentPropsWithoutRef, forwardRef, Ref, RefObject} from "react"
import {InputLabelProps, InputRef} from "../../types/components/Input.ts"

export const Input = forwardRef<InputRef, InputLabelProps>(
    function Input(
        {
            label,
            textarea,
            ...props
        }: InputLabelProps,
        ref: Ref<InputRef>
    ) {
        return(
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
                {
                    textarea ?
                        <textarea ref={ref as RefObject<HTMLTextAreaElement>} className="input" {...props as ComponentPropsWithoutRef<"textarea">}></textarea> :
                        <input ref={ref as RefObject<HTMLInputElement>} className="input" {...props as ComponentPropsWithoutRef<"input">} />
                }
            </p>
        )
    }
)
