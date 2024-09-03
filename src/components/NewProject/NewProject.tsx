import {Input} from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {ButtonType} from "../../enums/components/Button.ts";
import {useRef} from "react";
import {Project} from "../../interfaces/global.ts";

export default function NewProject(
    {
        onAdd
    }: {
        onAdd: (project: Project) => void
    }
) {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const dueDate = useRef<HTMLInputElement>(null);

    function handleSave() {
        const project: Project = {
            id: Math.random(),
            title: title.current?.value,
            description: description.current?.value,
            dueDate: dueDate.current?.value
        }

        onAdd(project)
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <Button label="Cancel" buttonType={ButtonType.Alternative} />
                </li>
                <li>
                    <Button label="Save" buttonType={ButtonType.Secondary} onClick={handleSave} />
                </li>
            </menu>
            <div>
                <Input ref={title} label="Title" type="text" />
                <Input ref={description} label="Description" textarea />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>
        </div>
    )
}
