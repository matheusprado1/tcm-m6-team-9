import { StyledInput } from "./styles";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder?: string;
    type?: string;
    width?: string;
    defaultValue?: string;
    register: UseFormRegisterReturn;
    error?: FieldError | undefined;
}

export function Input({
    label,
    type = "text",
    placeholder,
    width = "default",
    defaultValue,
    register,
    error,
}: InputProps): JSX.Element {
    const [value, setValue] = useState<string>(
        defaultValue ? defaultValue : ""
    );

    return (
        <StyledInput type={type} width={width}>
            <label className="label_input">{label}</label>
            <input
                className={
                    error ? "input_input error" : "input_input"
                }
                placeholder={placeholder}
                value={value}
                {...register}
                onChange={(e) => setValue(e.target.value)}
            />
        </StyledInput>
    );
}
