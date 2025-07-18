import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
type ServerData = {
    status: string;
    ip: string;
    timestamp: string;
    [key: string]: any;
};
export default function AppRouter() {
    const isLogin = true;
    const serverName = '';
    const [data, setData] = useState<ServerData>({
        status: '',
        ip: '',
        timestamp: '',
    });
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            {isLogin ? (
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            ) : (
                <Route path="/" element={<Navigate to="/login" />} />
            )}
        </Routes>
    );
}
