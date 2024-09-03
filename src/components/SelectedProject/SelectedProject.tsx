import {Project} from "../../interfaces/global.ts";
import Button from "../Button/Button.tsx";
import {ButtonType} from "../../enums/components/Button.ts";

export default function SelectedProject(
    project: Project
) {
    const formattedDate = project.dueDate ?
        new Date(project.dueDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : 'No due date'

    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button label="Delete" buttonType={ButtonType.Alternative} onClick={project.onDelete} />
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            TASKS
        </div>
    )
}
