import {ButtonType} from "../../enums/components/Button.ts";
import {ComponentPropsWithoutRef} from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    label?: string;
    buttonType?: ButtonType
}
