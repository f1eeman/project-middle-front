import {Link} from "react-router-dom";
import React, {FC} from "react";
import {classNames} from "shared/lib";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui";
interface NavbarProps {
  classes?: string
}
const Navbar:FC<NavbarProps> = ({classes}) => {
  return (
    <div className={classNames(cls.navbar, {}, [classes])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink}>Главная</AppLink>
        <AppLink to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};
export {Navbar};

