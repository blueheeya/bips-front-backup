import React, { useState, useMemo } from 'react';
import type { RootState } from '@/store';
import { selectMenu } from '../../store/menuSlice';
import { useAppSelector } from '../../store/hooks';
import { useOutletContext } from 'react-router-dom';
interface ServerType {
    program_id: string;
    hostname: string;
    program_name: string;
    is_always: boolean;
    category?: string;
    [key: string]: any;
}
interface ContextType {
    filteredData: ServerType[];
}
const TableList: React.FC<ContextType> = ({ filteredData }) => {
    const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
    const logDataMap = useAppSelector((state: RootState) => state.log.data);

    const handleToggle = (program_id: string) => {
        setOpenMap((prev) => ({
            ...prev,
            [program_id]: !prev[program_id],
        }));
    };
    const getHostnameLabel = (hostname: string) => {
        switch (hostname) {
            case 'exnet':
                return <span className="hostname intnet">인터넷서버</span>;
            case 'intnet':
                return <span className="hostname storage">적재입수서버</span>;
            case 'fxnet':
                return <span className="hostname fxnet">외환망</span>;
            default:
                return (
                    <span className="hostname unknown">
                        {hostname || '기타'}
                    </span>
                );
        }
    };
    return (
        <>
            {filteredData.map((item, index) => {
                const isOpen = openMap[item.id] || false;
                return (
                    <div
                        key={index}
                        className={`layout__list ${isOpen ? 'open' : 'collapsed'}`}
                    >
                        <div
                            className="layout__list-data"
                            onClick={() => handleToggle(item.id)}
                        >
                            <ul className="data__list">
                                <li>{getHostnameLabel(item.hostname)}</li>
                                <li className="name">{item.program_name}</li>
                                <li className="id">{item.program_id}</li>
                                <li
                                    className={`always ${
                                        item.is_always
                                            ? 'always-true'
                                            : 'always-false'
                                    }`}
                                >
                                    {item.is_always ? 'alwas' : '비상시'}
                                </li>
                            </ul>
                            <ul className="data__list">
                                <li>CPU: {item.cpu || '%'}</li>
                                <li>MEM: {item.mem || '0.7%'}</li>
                                <li className="state">
                                    {item.status || 'RUNNING'}
                                </li>
                                <li className="search">
                                    <input
                                        type="text"
                                        placeholder="검색어를 입력하세요"
                                    />
                                    <button>search</button>
                                </li>
                            </ul>
                        </div>
                        <div className="layout__list-log">
                            {logDataMap[item.program_id]?.log ?? '로그 없음'}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default TableList;
