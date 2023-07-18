import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
  CLEAR = 'clear',
  DEF = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
