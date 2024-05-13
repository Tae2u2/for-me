import { ChangeEvent, ForwardedRef, forwardRef } from "react";

interface RefInputState {
  labelText: string;
  type: "text" | "number" | "date" | "file" | "email";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  className: string;
  required: boolean;
  value: string;
  readOnly: boolean;
}

export const Input = forwardRef(function Input(
  {
    labelText,
    type = "text",
    onChange,
    name,
    placeholder,
    className,
    required,
    value,
    readOnly = false,
  }: RefInputState,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={className}>
      <label htmlFor={name}>
        {labelText}
        {required ? <span style={{ color: "#7041F5" }}>*</span> : <span />}
      </label>
      <input
        name={name}
        type={type}
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
});
