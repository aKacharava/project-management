import "../Button/button.css"
import Button from "../Button/Button.tsx";

export default function ProjectsSidebar() {
    return (
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button label="+ Add new Project" />
            </div>
            <ul>
                <li>Some Project</li>
            </ul>
        </aside>
    )
}
