import React, {FC, ButtonHTMLAttributes} from "react";

export enum TitleType {
    h1 = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl",
    h2 = "mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl",
    h3 = "mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl",
    h4 = "mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl",
    h5 = "mb-4 text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl",
}

export enum TextVariants {
    small = "",
    small_bold = "",
    normal = "",
    normal_bold = "",
    large = "",
    large_bold = "",
}

interface TitleProps {
    variant: keyof typeof TitleType,
    text: string
}

interface TextProps {
    variant: keyof typeof TextVariants,
    text: string
}

export const Title: FC<TitleProps> = ({variant, text}) => {
    return (
        <span className={TitleType[variant]}>
            {text}
        </span>
    )
}

export const Text: FC<TextProps> = ({variant, text}) => {
    return (
        <span className={TextVariants[variant]}>
            {text}
        </span>
    )
}