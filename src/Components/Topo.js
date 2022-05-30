import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Topo(){
    const { tasks, setTasks } = useContext(UserContext);
    localStorage.setItem('ImagePerfil', tasks.image)
    const ImgPerfil = localStorage.getItem('ImagePerfil')
    console.log(tasks)
    return(
        <>
            <Top>
                <NomeTopo>
                    <h1>TrackIt</h1>
                </NomeTopo>
                <FotoPerfil>
                    <img src={ImgPerfil}/>
                </FotoPerfil>
            </Top>
        </>
    );
}
const Top = styled.div`
    position:fixed;
    display:flex;
    justify-content: space-between;
    hight: 70px;
    width: 375px;
    background:#126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 18px;
    box-sizing: border-box;
`;
const NomeTopo = styled.div`
    h1{
        font-size: 38px;
        line-height: 49px;
        color: #FFFFFF;
    }
`;
const FotoPerfil = styled.div`
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;
