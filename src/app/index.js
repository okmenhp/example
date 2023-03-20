import React from "react";
import Login from "../pages/login";
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../pages/dashboard";

const App = () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        return <Login />
    }
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}
export default App;