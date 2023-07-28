import { FC } from 'react';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classes?: string
}
const Navbar:FC<NavbarProps> = ({ classes }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [classes])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export { Navbar };
