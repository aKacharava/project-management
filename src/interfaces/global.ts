export interface Project {
    id: number;
    title: string;
    description: string;
    dueDate: string;
}

export interface ProjectsSidebarItem {
    projects: Project[]
    onStartAddProject: () => void
}
