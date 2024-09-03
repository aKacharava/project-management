import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar.tsx";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected.tsx";
import {useState} from "react";
import NewProject from "./components/NewProject/NewProject.tsx";
import {ProjectsState} from "./types/global.ts";
import {Project} from "./interfaces/global.ts";

const initialProjectState: ProjectsState = {
    selectedProjectId: undefined,
    projects:[]
}

function App() {
    const [projectsState, setProjectsState] = useState<ProjectsState>(initialProjectState)

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    function handleAddProject(projectData: Project) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [
                    ...prevState.projects,
                    {
                        ...projectData,
                    }
                ]
            }
        })
    }

    function handleCancelAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        })
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    } else if(projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
            />
            {content}
        </main>
    )
}

export default App
