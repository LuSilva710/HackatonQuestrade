import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from './styles';

import {
    FaRegArrowAltCircleUp,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ creditScore, decision, amount }) => {
    return (
       <C. Container>
       <ResumeItem title="Valor do Empréstimo" Icon={FaDollarSign} value={amount}/>
       <ResumeItem title="Pontuação de Crédito" Icon={FaRegArrowAltCircleUp} value={creditScore}/>
       <ResumeItem title="Resultado" Icon={FaRegArrowAltCircleUp} value={decision}/>
       </C. Container>
    )
}

export default Resume;