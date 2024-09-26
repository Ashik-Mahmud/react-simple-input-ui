import React from "react";

export type InputProps = {
  label?: string;
  type: string | "textarea";
  name: string;
  placeholder?: string;
  required?: boolean;
  theme: "beautiful" | "normal";
  textareaRows?: number;
  id?: string;
};

const Input = ({
  type,
  label,
  name,
  placeholder,
  required,
  textareaRows,
  id,
}: InputProps) => {
  return (
    <div>
      {type === "textarea" ? (
        <>
          <label htmlFor={id}>{label}</label>
          <textarea id={id} rows={textareaRows || 4}></textarea>
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
          />
        </>
      )}
    </div>
  );
};

export default Input;
