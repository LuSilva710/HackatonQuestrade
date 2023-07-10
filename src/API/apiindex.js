import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [usdRate, setUsdRate] = useState('');

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const rate = data.rates.BRL; // Altere 'BRL' para a moeda desejada, se necessário
        setUsdRate(rate);
      } catch (error) {
        console.error('Erro ao buscar a taxa de câmbio:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <div>
      <h1>Cotação do Dólar</h1>
      <p>Taxa atual: {usdRate}</p>
    </div>
  );
};

export default CurrencyConverter;
