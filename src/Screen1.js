import React from 'react';
import { Title } from "./Login/styles";
import MyComponent from "./Login/titulo";
import Form from "./components/Form";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import CurrencyConverter from './API/apiindex';



const Screen1 = () => {
    return (
        <>
            <Title />
            <MyComponent />
            <Header />
            <Form />
            <CurrencyConverter />
            <GlobalStyle />
        </>
    );
};


export default Screen1;