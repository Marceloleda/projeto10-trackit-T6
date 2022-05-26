import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";

import '../Assets/css/reset.css';
import '../Assets/css/style.css';

export default function App(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />}/>
                <Route path="/habitos" element={<TelaHabitos />}/>
                <Route path="/hoje" element={<TelaHoje />}/>
                <Route path="/historico" element={<TelaHistorico />}/>

            </Routes>
        </BrowserRouter>
    );
}