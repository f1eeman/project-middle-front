import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}
interface AppLinkProps extends LinkProps{
  classes?: string
  theme?: AppLinkTheme;
}
const AppLink:FC<AppLinkProps> = ({
    classes, to, children, theme = AppLinkTheme.PRIMARY, ...props
}) => (
    <Link {...props} to={to} className={classNames(cls.AppLink, { [cls[theme]]: true }, [classes])}>
        {children}
    </Link>
);

export { AppLink };
