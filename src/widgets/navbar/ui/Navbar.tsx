import React, { FC } from 'react';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classes?: string
}
const Navbar:FC<NavbarProps> = ({ classes }) => (
    <div className={classNames(cls.navbar, {}, [classes])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink}>Главная</AppLink>
            <AppLink to="/about">О сайте</AppLink>
        </div>
    </div>
);
export { Navbar };
