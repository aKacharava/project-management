import Input from "../Input/Input.tsx";

export default function NewProject() {
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-200 transition-all duration-200">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 dark:bg-stone-400 dark:text-stone-100 dark:hover:bg-stone-200 dark:hover:text-stone-400 transition-all duration-200">Save</button>
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
