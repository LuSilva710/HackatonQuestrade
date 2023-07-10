import React, { useState } from "react";
import * as C from "./styles";
import Resume from "../resumo";

const Form = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [creditScore, setCreditScore] = useState('');
    const [decision, setDecision] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const isApproved = parseInt(creditScore) >= 700;

        if (isApproved) {
            setDecision( `${name} - Empréstimo Aprovado`);
        } else {
            setDecision('Reprovado');
        }
    };

    return (
        <>
       
        <Resume creditScore={creditScore} decision={decision} amount={amount} />
       
        <C.Container>
            
            <C.InputContent>
              <C.Label>Nome:</C.Label>
              <C.Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </C.InputContent>
  
              <C.InputContent>
                <C.Label>Valor de empréstimo:</C.Label>
                <C.Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </C.InputContent>
    
              <C.InputContent>
                <C.Label>Pontuação de crédito:</C.Label>
                <C.Input
                  type="number"
                  value={creditScore}
                  onChange={(e) => setCreditScore(e.target.value)}
                />
              </C.InputContent>
    
                <C.Button onClick={handleSubmit}>Enviar solicitação</C.Button>
              </C.Container>
                     
        </>
      );
    };
    
    export default Form;