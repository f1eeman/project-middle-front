import {FC} from "react";
import {classNames} from "shared/lib";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}
interface AppLinkProps extends LinkProps{
  classes?: string
  theme?: AppLinkTheme;
}
const AppLink:FC<AppLinkProps> = ({classes,to, children, theme=AppLinkTheme.PRIMARY  ,...props}) => {
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [classes, theme])}>
      {children}
    </Link>
  );
};

export {AppLink};
