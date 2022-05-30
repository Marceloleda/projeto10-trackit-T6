import styled from "styled-components";
import Topo from "./Topo";
import MenuFooter from './MenuFooter'

export default function TelaHistorico () {
    return (

        <>
            <Empurra/>
            <HistoryTitle>Histórico</HistoryTitle>
            <FutureHistory>Em breve, você poderá ver o histórico dos seus hábitos, aqui!</FutureHistory>
        </>

    );
}

const HistoryTitle = styled.div`

    margin-top: 50px;
    margin-left: 15px;
    width: 100px;
    height: 29px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;

    color: #126BA5;

`;

const FutureHistory = styled.div`

    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 205px;
    width: 338px;
    height: 74px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;

    color: #666666;

`;
const Empurra = styled.div`
    height:110px;
`;