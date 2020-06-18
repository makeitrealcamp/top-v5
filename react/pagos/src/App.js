import React from 'react';
import './App.css';

function App() {
  function handlePayment() {
    const handler = window.ePayco.checkout.configure({
      key: process.env.REACT_APP_API_KEY,
      test: true,
    });

    handler.open({
      external: 'false',
      amount: '50000',
      tax: '0',
      tax_base: '0',
      name: 'Comprarle pc a Simón',
      description: 'pobresito',
      currency: 'cop',
      country: 'CO',
      lang: 'en',
      invoice: '12345',
      extra1: 'extra 1',
      extra2: 'extra 2',
      extra3: 'extra 3',
      response: '',
      methodsDisable: ['PSE', 'CASH', 'DP', 'SP'],
      name_billing: 'Simón Hoyos',
      address_billing: 'Calle 72 # 14 156',
      type_doc_billing: 'cc',
      mobilephone_billing: '3063245246',
      number_doc_billing: '132573944',
    })
  }

  return (
    <button onClick={handlePayment}>Pagar</button>
  );
}

export default App;
