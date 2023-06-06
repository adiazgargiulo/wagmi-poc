import React, {FC, Ref, forwardRef, InputHTMLAttributes} from "react";

export enum InputStyle {
    primary = "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  text-center",
    secondary = "",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    variant: keyof typeof InputStyle
}

type InputComponentProps = InputProps & { ref?: Ref<HTMLInputElement> }

export const Input: FC<InputComponentProps> = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { variant, ...otherProps } = props;
    return (
        <input className={InputStyle[variant]} {...otherProps} ref={ref} />
    );
});
Input.displayName = "Input";
