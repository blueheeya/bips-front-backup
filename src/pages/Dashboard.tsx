import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TableList from '../components/layout/TableList';

// Context 타입 정의
interface ContextType {
    filteredData: any[]; // 실제 타입이 있다면 정확하게 지정
}

const Dashboard = () => {
    const { filteredData } = useOutletContext<ContextType>();

    return (
        <div className="content">
            <TableList filteredData={filteredData} />
        </div>
    );
};

export default Dashboard;
