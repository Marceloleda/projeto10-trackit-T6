import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import logo from "../Assets/img/Group 8.png"



export default function TelaCadastro(){
    const [cadastro, setCadastro] = useState({
        email:"",
        senha:"",
        nome:"",
        foto:""
    });
    useEffect(() => {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        const promise = axios.post(URL, {
            email: cadastro.email,
            senha: cadastro.senha,
            nome: cadastro.nome,
            foto:cadastro.foto
        })
        promise.then((response) => {
            console.log(response);
        })
        promise.catch(err => console.log(err.message))
    }, [])
    console.log(cadastro)
    return(
        <> 
            <Imagem>
                <img src={logo}/>
            </Imagem>
            <Login>
                <Conteiner>
                    <form>
                        <CampoInfo id="email" type="email" placeholder="email" value={cadastro.email} onChange={
                            (e) => setCadastro({...cadastro,
                                email: e.target.value
                            })
                            } required />
                        <CampoInfo id="senha" type="password" placeholder="senha" value={cadastro.senha} onChange={
                            (e) => setCadastro({...cadastro,
                                senha: e.target.value
                            })
                            } required />
                         <CampoInfo id="nome" type="text" placeholder="nome" value={cadastro.nome} onChange={
                            (e) => setCadastro({...cadastro,
                                nome: e.target.value
                            })
                            } required />
                         <CampoInfo id="foto" type="url" placeholder="foto" value={cadastro.foto} onChange={
                            (e) => setCadastro({...cadastro,
                                foto: e.target.value
                            })
                            } required />
                        <Botao type="submit" >Cadastrar</Botao>
                    </form>
                </Conteiner>
            </Login>
            <Cadastro>
                <Link to={`/`}>
                    <h2>Já tem uma conta? Faça login!</h2>
                </Link>
            </Cadastro>
        </>
    );
}

const Imagem = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 68px;
    img{
        width: 180px;
        height: 178px;
    }

`;
const Conteiner = styled.div`
    margin-left:36px;
`;
const Login = styled.div`
    display: flex;
    justify-content: center;
`;
const Cadastro = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    h2{
        color: #52B6FF;
    }
`;
const CampoInfo = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;

`;
const Botao = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border:none;
    cursor: pointer;

    font-family: 'Lexend Deca';
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
    &:hover {
	    background: #0864a5;
    }
`;