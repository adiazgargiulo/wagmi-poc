import React, { FC, ButtonHTMLAttributes } from "react";

export enum ButtonType {
  primary = "cursor-pointer text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500",
  secondary = "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  variant: keyof typeof ButtonType,
  children: React.ReactNode
}

export const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button type="button" className={ButtonType[variant]} {...props} >
      {children}
    </button>
  )
}