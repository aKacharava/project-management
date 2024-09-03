import {Project} from "../interfaces/global.ts";

export type ProjectsState = {
    selectedProjectId: number|undefined|null;
    projects: Project[];
}
