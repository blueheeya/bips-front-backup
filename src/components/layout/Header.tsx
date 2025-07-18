import React from 'react';

interface HeaderProps {
    title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="layout__header">
            <h1>{title}</h1>
            <ul className="layout__header-detail">
                <li>타임</li>
                <li>
                    Always<span>2/2</span>
                </li>
                <li>
                    Non-Always<span>0/3</span>
                </li>
                <li>
                    RUNNING<span>2/5</span>
                </li>
                <li>
                    STOPPED<span>0</span>
                </li>
                <li>
                    UNKNOWN<span>3</span>
                </li>
            </ul>
        </header>
    );
};

export default Header;
