import { ButtonProps } from "../../interfaces/components/Button.ts"
import { ButtonType } from "../../enums/components/Button.ts"

const buttonTypeMap: Record<ButtonType, string> = {
    [ButtonType.Primary]: "button-primary",
    [ButtonType.Secondary]: "button-secondary",
    [ButtonType.Alternative]: "button-alternative",
}

function determineButtonType(type: ButtonType = ButtonType.Primary) {
    return buttonTypeMap[type]
}

export default function Button(
    {
        label,
        buttonType,
        ...props
    }: ButtonProps
) {
    const className = determineButtonType(buttonType)

    return (
        <button className={className} {...props}>
            {label}
        </button>
    )
}
