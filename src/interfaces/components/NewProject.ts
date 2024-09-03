import {Project} from "../global.ts";

export interface NewProjectProps {
    onAdd: (project: Project) => void;
    onCancel: () => void;
}
