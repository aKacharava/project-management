import "../Button/button.css"
import Button from "../Button/Button.tsx";
import {ProjectsSidebarItem} from "../../interfaces/global.ts";
import {ButtonType} from "../../enums/components/Button.ts";

export default function ProjectsSidebar(
    {
        projects,
        onStartAddProject,
        onSelectProject,
        selectedProjectId
    }: ProjectsSidebarItem
) {
    return (
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button label="+ Add new Project" onClick={onStartAddProject} />
            </div>
            <ul>
                {
                    projects.map((project) => {
                        let highlighted = "px-2 py-1 rounded-md w-full hover:bg-pink-950 transition-all duration-200"

                        if(project.id === selectedProjectId) {
                            highlighted += " bg-pink-700"
                        }

                        return (
                            <li key={project.id} className="my-4">
                                <Button
                                    label={project.title}
                                    buttonType={ButtonType.ProjectSidebarItem}
                                    onClick={() => project.id !== undefined && onSelectProject(project.id)}
                                    className={highlighted}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}
