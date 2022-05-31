import styled from 'styled-components';
import { useState, useEffect, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import logo from "../Assets/img/Group 8.png"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";




export default function TelaLogin(){
    const navigate = useNavigate();
	const { tasks, setTasks } = useContext(UserContext);

    const [login, setLogin] = useState({
        email:"",
        senha:""
    });

    function singUp(event){
        event.preventDefault();
        const body ={
            email: login.email,
            password: login.senha
        }
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
        const promise = axios.post(URL, body)

        promise.then((response) => {
            setTasks(response.data)
            sessionStorage.setItem('TokenLogin', response.data.token)
            navigate('/hoje');
        })

        promise.catch(err => {
            alert(`Algo está errado! Verifique seus dados e tente novamente! =)`)
            console.log(err.message)
        });
    }
    return(
        <> 
            <Imagem>
                <img src={logo}/>
            </Imagem>
            <Login>
                <Conteiner>
                    <form onSubmit={singUp}>
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
                        <Botao type='submit' >Entrar</Botao>
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
    background: red;
    border-radius: 4.63636px;
    border:none;
    cursor: pointer;

    font-family:     'Lexend Deca';
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
    &:hover {
	    background: #0864a5;
    }
`;