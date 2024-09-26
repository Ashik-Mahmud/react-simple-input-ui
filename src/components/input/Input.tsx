import React from "react";
import { InputProps } from "./types";

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
