import React from "react";
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";
import Topo from "./Topo";
import MenuFooter from "./MenuFooter";

import '../Assets/css/reset.css';
import '../Assets/css/style.css';

export default function App(){
    const [tasks, setTasks] = useState([]);
    const contextValue = { tasks, setTasks };

    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={
                    <UserContext.Provider value={contextValue}>
                        <TelaLogin />
                    </UserContext.Provider>
                } />
                <Route path="/cadastro" element={<TelaCadastro />}/>
                <Route path="/habitos" element={
                    <UserContext.Provider value={contextValue}>
                        <Topo />
                        <TelaHabitos />
                        <MenuFooter/>
                    </UserContext.Provider>
                }/>
                <Route path="/hoje" element={
                    <UserContext.Provider value={contextValue}>
                        <Topo />
                        <TelaHoje />
                        <MenuFooter/>
                    </UserContext.Provider>
                }/>
                <Route path="/historico" element={
                    <UserContext.Provider value={contextValue}>
                        <Topo />
                        <TelaHistorico />
                        <MenuFooter/>
                    </UserContext.Provider>

                    
                }/>
            </Routes>
        </BrowserRouter>
    );
}