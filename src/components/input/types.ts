import { CSSProperties } from "react";

export interface SimpleInputProps {
    label?: string;
    labelClass?: string;
    labelStyle?: CSSProperties;
    InputWrapperClass?: string;
    InputWrapperStyle?: CSSProperties;
    type: string | "textarea";
    name: string;
    placeholder?: string;
    required?: boolean;
    theme: "beautiful" | "normal";
    textareaRows?: number;
    id?: string;
};
