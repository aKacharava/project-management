import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {ButtonType} from "../../enums/components/Button.ts";

export default function NewProject() {
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <Button label="Cancel" buttonType={ButtonType.Alternative} />
                </li>
                <li>
                    <Button label="Save" buttonType={ButtonType.Secondary} />
                </li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    )
}
