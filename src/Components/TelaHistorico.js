import styled from "styled-components";
import Topo from "./Topo";
import MenuFooter from './MenuFooter'

export default function TelaHistorico () {
    return (

        <Body>
            <Empurra/>
            <HistoryTitle>Histórico</HistoryTitle>
            <FutureHistory>Em breve, você poderá ver o histórico dos seus hábitos, aqui!</FutureHistory>
        </Body>

    );
}
const Body =styled.div`
    background:#F2F2F2;
    height: 530px;
    padding: 18px;
    box-sizing: border-box;


`;
const HistoryTitle = styled.div`

    margin-top: 20px;
    margin-left: 15px;
    height: 29px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;

    color: #126BA5;

`;

const FutureHistory = styled.div`

    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 235px;
    height: 74px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;

    color: #666666;

`;
const Empurra = styled.div`
    height:110px;
`;