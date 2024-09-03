import {Input} from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {ButtonType} from "../../enums/components/Button.ts";
import {useRef} from "react";
import {Project} from "../../interfaces/global.ts";
import {Modal} from "../Modal/Modal.tsx";
import {ModalHandle} from "../../interfaces/components/Modal.ts";
import {NewProjectProps} from "../../interfaces/components/NewProject.ts";

export default function NewProject(
    {
        onAdd,
        onCancel
    }: NewProjectProps
) {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const dueDate = useRef<HTMLInputElement>(null);
    const modal = useRef<ModalHandle>(null);

    function handleSave() {
        const enteredTitle = title.current?.value
        const enteredDescription = title.current?.value
        const enteredDueDate = title.current?.value

        if (
            enteredTitle?.trim() === '' ||
            enteredDescription?.trim() === '' ||
            enteredDueDate?.trim() === ''
        ) {
            modal.current?.open()
            return
        }

        const project: Project = {
            id: Math.random(),
            title: title.current?.value,
            description: description.current?.value,
            dueDate: dueDate.current?.value
        }

        onAdd(project)
    }

    return(
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-500 dark:text-stone-300 my-4">Invalid input</h2>
                <p className="text-stone-400 dark:text-stone-500 mb-4">It seems you forgot to enter a value.</p>
                <p className="text-stone-400 dark:text-stone-500 mb-4">Please enter a value.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <Button label="Cancel" buttonType={ButtonType.Alternative} onClick={onCancel} />
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
        </>
    )
}
