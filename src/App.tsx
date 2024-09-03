import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar.tsx";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected.tsx";
import {useState} from "react";
import NewProject from "./components/NewProject/NewProject.tsx";
import {ProjectsState} from "./types/global.ts";
import {Project} from "./interfaces/global.ts";
import SelectedProject from "./components/SelectedProject/SelectedProject.tsx";

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

    function handleSelectProject(projectId: number) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: projectId
            }
        })
    }

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

    let content = selectedProject && <SelectedProject {...selectedProject} />;

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
                onSelectProject={handleSelectProject}
                selectedProjectId={projectsState.selectedProjectId ?? undefined}
            />
            {content}
        </main>
    )
}

export default App
