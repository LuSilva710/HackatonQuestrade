import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px; 



    @media (max-width: 750px){
        display: grid;
    }
    `;

    export const Resume = styled.div`
    margin-top: -10px;
    `;

    export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
    `;

    export const Label = styled.label``;

    export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 1px solid #ccc;
    
    `;

  
    export const Button = styled.button`
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        background-color: #40a548;

    `;