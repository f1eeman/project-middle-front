import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classes?: string
}
const Navbar:FC<NavbarProps> = ({ classes }) => (
    <div className={classNames(cls.Navbar, {}, [classes])}>
        <div className={cls.links}>
            /
        </div>
    </div>
);

export { Navbar };
