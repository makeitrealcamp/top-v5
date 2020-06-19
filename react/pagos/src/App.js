import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

// utils
function queryString(query) {
  const res = {};
  query
    .replace(/\?/, '')
    .split('&')
    .forEach(q => {
      const [key, value] = q.split('=');
      res[key] = value;
    });

  return res;
}

function Payment() {
  function handlePayment() {
    const handler = window.ePayco.checkout.configure({
      key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
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
      response: 'http://localhost:3000/response',
      methodsDisable: ['PSE', 'CASH', 'DP', 'SP'],
      name_billing: 'Simón Hoyos',
      address_billing: 'Calle 72 # 14 156',
      type_doc_billing: 'cc',
      mobilephone_billing: '3063245246',
      number_doc_billing: '132573944',
    });
  }

  return (
    <button onClick={handlePayment}>Pagar</button>
  );
}

function Response({ location }) {
  useEffect(() => {
    const { ref_payco } = queryString(location.search);

    axios({
      method: 'GET',
      url: `https://secure.epayco.co/validation/v1/reference/${ref_payco}`
    })
      .then(({ data }) => console.log(data));
  }, [location]);

  return (
    <>
      <h1>Response</h1>
    </>
  )
}

function Token() {
  async function handleToken() {
    const { data } = await axios({
      method: 'POST',
      url: 'https://api.secure.payco.co/v1/auth/login',
      data: {
        public_key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
        private_key: process.env.REACT_APP_EPAYCO_PRIVATE_KEY,
      }
    });

    console.log('data', data.bearer_token);

    const cardInfo = {
      "card[number]": "4575623182290326",
      "card[exp_year]": "2025",
      "card[exp_month]": "12",
      "card[cvc]": "123"
    };

    await axios({
      method: 'POST',
      url: 'https://api.secure.payco.co/v1/tokens',
      data: cardInfo,
      headers: {
        'Authorization': `Bearer ${data.bearer_token}`,
        type: 'sdk-jwt'
      }
    });
  }

  return (
    <button onClick={handleToken}>Guardar tarjeta</button>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Payment} />
        <Route exact path="/response" component={Response} />
        <Route exact path="/token" component={Token} />
      </Switch>
    </Router>
  )
}

export default App;
