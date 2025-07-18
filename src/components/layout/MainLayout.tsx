<<<<<<< HEAD
import React, { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { useAppContext } from '../../contexts/AppContext';
import { selectMenu, setMenus } from '../../store/menuSlice';
import { fetchData } from '../../store/dataSlice';
=======
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { fetchServerData } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21

import Header from './Header';
import Sidebar from './Sidebar';
export interface TableItem {
    id: number;
    title: string;
    hostname: string;
    value: string;
}

const MainLayout = () => {
    const dispatch = useAppDispatch();
    const { theme, toggleTheme } = useAppContext(); //light,dark Mode 변경
    // const dataList = useAppSelector((state) => state.data.data);
    const data = useAppSelector((state) => state.data.data);
    const selectedMenu = useAppSelector((state) => state.menu.selectedMenu);

    useEffect(() => {
<<<<<<< HEAD
        const dummyMenus = [
            {
                id: 'all',
                name: '전체 서버',
                iconName: 'allServer',
            },
            {
                id: 'exnet',
                name: '인터넷 입수서버',
                iconName: 'internetServer',
            },
            {
                id: 'intnet',
                name: '적재 입수서버',
                iconName: 'dataServer',
            },
            {
                id: 'fxnet',
                name: '외환망 적재서버',
                iconName: 'forexServer',
            },
        ];
        dispatch(setMenus(dummyMenus));
        dispatch(selectMenu(dummyMenus[0])); // 첫 번째 메뉴 선택
        dispatch(fetchData());
=======
        dispatch(fetchServerData());
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21
    }, [dispatch]);
    // const filteredData =
    //     selectedMenu?.id === 'all'
    //         ? data
    //         : data.filter((item) => item.menuId === selectedMenu?.id);
    const filteredData =
        selectedMenu?.id === 'all'
            ? data.flatMap((item) => item.program_list)
            : data
                  .filter((item) => item.hostname === selectedMenu?.id)
                  .flatMap((item) => item.program_list);
    return (
        <ThemeProvider>
            <div className={`layout ${theme}`}>
                <Sidebar />
                <div className="layout__content">
                    <main className="layout__body">
                        <div className="layout__body-header">
                            <Header title={selectedMenu?.name || '전체 서버'} />
                            <div className="layout__control">
                                <button onClick={toggleTheme}>
                                    {theme === 'light'
                                        ? 'Dark Mode'
                                        : 'Light Mode'}
                                </button>
                            </div>
                        </div>
                        <div className="layout_body-innner">
                            <Outlet context={{ filteredData }} />
                        </div>
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
};
export default MainLayout;
