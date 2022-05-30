import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function MenuFooter(){
    return(
        <>
            <Footer>
                <Link to={'/habitos'}><h1>Hábitos</h1></Link>
                <Link to={'/historico'}><h1>Hitórico</h1></Link>
            </Footer>
        </>
    );
}
const Footer = styled.div`
    position:fixed;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 35px;
    box-sizing: border-box;
    height: 70px;
    width: 375px;
    color: #FFFFFF;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        }
`;