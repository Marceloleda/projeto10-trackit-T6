import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import logo from "../Assets/img/Group 8.png"



export default function TelaLogin(){
    const [login, setLogin] = useState({
        email:"",
        senha:""
    });
    console.log(login)
    return(
        <> 
            <Imagem>
                <img src={logo}/>
            </Imagem>
            <Login>
                <Conteiner>
                    <form>
                        <CampoInfo id="email" type="email" placeholder="email" value={login.email} onChange={
                            (e) => setLogin({...login,
                                email: e.target.value
                            })
                            } required />
                        <CampoInfo id="senha" type="password" placeholder="senha" value={login.senha} onChange={
                            (e) => setLogin({...login,
                                senha: e.target.value
                            })
                            } required />
                        <Botao type="submit" >Entrar</Botao>
                    </form>
                </Conteiner>
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
const Conteiner = styled.div`
    margin-left:36px;
`;
const Login = styled.div`
    display: flex;
    justify-content: center;
    height:160px;
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