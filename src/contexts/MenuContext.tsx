import React, { createContext, useContext, useState } from 'react';

type MenuContextType = {
    selectedMenu: string;
    setSelectedMenu: (menu: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [selectedMenu, setSelectedMenu] = useState<string>('전체 서버');
    return (
        <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};
