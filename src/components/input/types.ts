
export interface InputProps {
    label?: string;
    type: string | "textarea";
    name: string;
    placeholder?: string;
    required?: boolean;
    theme: "beautiful" | "normal";
    textareaRows?: number;
    id?: string;
};
