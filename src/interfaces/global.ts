export interface Project {
    id?: number,
    title?: string,
    description?: string,
    dueDate?: string,
    onDelete?: () => void
}

export interface ProjectsSidebarItem {
    projects: Project[]
    onStartAddProject: () => void
    onSelectProject: (projectId: number) => void
    selectedProjectId: number | undefined
}
