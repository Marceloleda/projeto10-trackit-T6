import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {useState, useEffect } from "react";
import axios from "axios";
import check from "../Assets/img/check.png"

export default function TelaHabitos(){
    const { tasks, setTasks } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('TokenLogin')}` }
    };
    const checkDays = [
        {id: 0, name: 'D'},
        {id: 1, name: 'S'},
        {id: 2, name: 'T'},
        {id: 3, name: 'Q'},
        {id: 4, name: 'Q'},
        {id: 5, name: 'S'},
        {id: 6, name: 'S'}    
    ];


    const [habits, setHabits] = useState ([]);
    const [createHabits, setCreateHabits] = useState({
        nome: "",
        dias: ''
    });
    const [habitoCriado, setHabitoCriado] = useState(false);
    const [diaSelecionado, setDiaSelecionado] =useState([])
    const [toggle, setToggle] = useState(true);

    console.log(diaSelecionado)

    useEffect(()=>{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
        const promise = axios.post(URL, {
            name: createHabits.nome,
            days: createHabits.dias
        }, config);

        promise.then((response) => {
            console.log('deu certo')
        })

        promise.catch((err) => {
            console.log('deu ruim')
            console.log(err.message)
        })
    },[])

    function selecionadoDia (id) {
        if (diaSelecionado.includes(id)) {
            const newSelectedDay = diaSelecionado.filter(day => day !== id);
            setDiaSelecionado([...newSelectedDay]);
        } else {
            setDiaSelecionado([...diaSelecionado, id]);
        }
    }


    function criarHabito(){
        if( habitoCriado === true){
            return(
                <>
                    <TaskHabit>
                        <InputHabit id="nome" type="text" placeholder="nome do hábito" value={createHabits.nome} onChange={
                            (e) => setCreateHabits({...createHabits,
                                nome: e.target.value
                            })}
                        />
                        {checkDays.map((dias) => {
                            return(
                                <>
                                    <CheckBox  onClick={(e) => {
                                        selecionadoDia(dias.id)
                                        setToggle(!toggle)
                                    }}>{dias.name}
                                    </CheckBox>
                                </>
                            );
                        })}
                         <Botoes >
                            <h1 onClick={() => {
                                alert('Se deseja realmente excluir esta rotina, clique em ok')
                                setHabitoCriado(!habitoCriado)
                                createHabits.nome = ''}}> Cancelar
                            </h1>
                            <Salvar>
                                Salvar
                            </Salvar>
                        </Botoes>
                    </TaskHabit>
                </>
            );
        }
        return(
            <>
            </>
        );
    }   
    function botaoCOlor(){
        if(toggle === false){
            const cor = "background: #CFCFCF;"
        }else{
            const cor = "background: #FFFFFF;"
        }
    }
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily', config);
        promise.then(response => {
            console.log(response.data)
            setHabits(response.data)
        })
        promise.catch((err) => {
            console.log('deu erro')
            console.log(err.message)
        })
    },[])
    function showHabits(){
        if(habits.length > 0){
            habits.map((habts) => {
                return(
                    <>
                        <TarefasHabitos>
                            <h1>{habts.name}</h1>
                            <h2>{habts.days}</h2>
                            <h2>{habts.id}</h2>
                            <BotaoCheck>
                                <img src={check} alt="check" />
                            </BotaoCheck>
                        </TarefasHabitos>
                    </>
                );
            })
        }
        return(
            <>
                <NoHabts>
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </NoHabts>
            </>
        );
    }
    
    return(
        <>  
            <Habitos>
                <Empurra />
                <AddHabito>
                    <h1>Meus hábitos</h1>
                    <Botao onClick={() => {
                        setHabitoCriado(!habitoCriado)
                        }}>
                        +
                    </Botao>
                </AddHabito>
                {criarHabito()}
                {showHabits()}
            </Habitos>
        </>
    );
}
const AddHabito = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    height: 60px;
    background:#F2F2F2;
    padding: 5px;
    box-sizing: border-box;
    h1{
        font-size:23px;
    }
`;
const Botao = styled.button`
    width: 40px;
    height: 35px;

    background: #52B6FF;
    border-radius: 5px;
    font-size: 27px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover{
        background: #0663A5;
    }
`;
const Habitos = styled.div`
    height: 585px;
    background:#F2F2F2;
    padding: 18px;
    box-sizing: border-box;
  
`;
const Empurra = styled.div`
    height:75px;
`;
// =================================================
const TarefasHabitos = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
`;
const BotaoCheck=styled.div`
    width: 69px;
    height: 69px;
    background: #8FC549;
    border-radius: 5px;
`;
const NoHabts = styled.div`
    height: 74px;
    margin-top: 29px;
    h1{
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;
// =======================================================
const TaskHabit = styled.div`
    padding: 18px;
    box-sizing: border-box;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
`;
const InputHabit = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
`;
const CheckBox =styled.button`
    width: 30px;
    height: 30px;
    margin-top:8px;
    margin-right:4px;
    background: ${({toggle}) => toggle ? '#FFFFFF': '#CFCFCF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
	    background: #0864a5;
    }
    
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 25px;
    color: ${() => 'background '? '#CFCFCF' : '#FFFFFF'};
`;
const Botoes = styled.div`
    height:40px;
    margin-top:29px;
    display:flex;
    justify-content: right;
    align-items: center;
    h1{
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }
`;
const Salvar =styled.button`
    width: 84px;
    height: 35px;
    margin-left: 23px;
    background: #52B6FF;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover {
	    background: #0864a5;
    }
`;