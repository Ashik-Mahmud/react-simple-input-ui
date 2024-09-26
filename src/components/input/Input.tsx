import React, { HTMLProps } from "react";
import { SimpleInputProps } from "./types";

type props = SimpleInputProps & HTMLProps<HTMLInputElement>;
const Input = ({
  type,
  label,
  name,
  placeholder,
  required,
  textareaRows,
  id,
  labelClass,
  labelStyle,
  InputWrapperClass,
  InputWrapperStyle,
  ...rest
}: props) => {
  return (
    <div className={InputWrapperClass} style={InputWrapperStyle}>
      {type === "textarea" ? (
        <>
          {label && (
            <label className={labelClass} style={labelStyle} htmlFor={id}>
              {label}
            </label>
          )}
          <textarea
            id={id}
            rows={textareaRows || 4}
            name={name}
            placeholder={placeholder}
            required={required}
            {...(rest as React.DetailedHTMLProps<
              React.TextareaHTMLAttributes<HTMLTextAreaElement>,
              HTMLTextAreaElement
            >)}
          ></textarea>
        </>
      ) : (
        <>
          {label && (
            <label className={labelClass} style={labelStyle} htmlFor={id}>
              {label}
            </label>
          )}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            {...rest}
          />
        </>
      )}
    </div>
  );
};

export default Input;
