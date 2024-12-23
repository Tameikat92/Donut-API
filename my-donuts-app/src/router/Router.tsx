import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Details from '../pages/Details'

const Router: React.FC = () => {
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        </Routes>
    );
};

export default Router;