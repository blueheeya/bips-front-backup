import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Menu =
    | '전체 서버'
    | '인터넷 입수서버'
    | '적재 입수서버'
    | '외환망 적재서버';

interface ServerData {
    id: number;
    name: string;
    status: string;
    type: Menu;
}

interface AppContextType {
    theme: Theme;
    toggleTheme: () => void;
    selectedMenu: Menu;
    setSelectedMenu: (menu: Menu) => void;
    data: ServerData[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [selectedMenu, setSelectedMenu] = useState<Menu>('전체 서버');
    const [data, setData] = useState<ServerData[]>([]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    // 예시 JSON 호출
    useEffect(() => {
        fetch('/data/serverData.json') // public 폴더 또는 API
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    return (
        <AppContext.Provider
            value={{
                theme,
                toggleTheme,
                selectedMenu,
                setSelectedMenu,
                data,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('AppContext must be used inside AppProvider');
    return ctx;
};
