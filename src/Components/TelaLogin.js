import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/img/Group 8.png"



export default function TelaLogin(){
    return(
        <> 
            <Imagem>
                <img src={logo}/>
            </Imagem>
            <Login>
                <h1>login</h1>
            </Login>
            <Cadastro>
                <Link to={`/cadastro`}>
                    <h2>Não tem uma conta? Cadastre-se!</h2>
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
const Login = styled.div`
    height:160px;
    background-color: blue;
`;
const Cadastro = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    h2{
        text-decoration:none;
    }
`;