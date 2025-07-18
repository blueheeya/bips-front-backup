import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectMenu } from '../../store/menuSlice';
import { useAppContext } from '../../contexts/AppContext';
import '../../assets/styles/sidebar.scss';
import Icons from '../icon/Icons';
import type { IconType } from '../icon/Icons';

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const { theme } = useAppContext();
    const [isOpen, setIsOpen] = useState(true);

    const menuList = useAppSelector((state) => state.menu.menuList);
    const selectedMenu = useAppSelector((state) => state.menu.selectedMenu);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'collapsed'} ${theme}`}>
            <button className="toggle-btn" onClick={handleToggle}>
                {isOpen ? '← 닫기' : '→ 전체'}
            </button>
            <h1 className="bips_logo">
                <i>BIPS LOGO</i>
                <span>BIPS DaemonEye</span>
            </h1>
            <ul className="menu">
                {menuList.map((menu) => {
                    const isActive = selectedMenu?.id === menu.id;
                    return (
                        <li
                            key={menu.id}
                            className={`${isActive ? 'active' : ''} ${isOpen ? 'open' : 'collapsed'}`}
                        >
                            <button
                                onClick={() => dispatch(selectMenu(menu))}
                                className="menu-btn"
                            >
                                <Icons
                                    name={menu.iconName as IconType}
                                    isActive={isOpen ? undefined : isActive}
                                    size={24}
                                    className="icon"
                                />
                                <span className="label">{menu.name}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
