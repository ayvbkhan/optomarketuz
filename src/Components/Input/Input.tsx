import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
}

export const Input = ({ type, placeholder, ...props }: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} {...props} />
    );
};
