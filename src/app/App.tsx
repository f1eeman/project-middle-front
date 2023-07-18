import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {ThemeSwitcher} from "shared/ui";



const App = () => {
   const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeSwitcher />
          <Navbar />
          <AppRouter />
        </div>
    );
};

export default App;
