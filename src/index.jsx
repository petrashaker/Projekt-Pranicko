import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import CardCreate from './components/CardCreate';
import CardPickUp from './components/CardPickUp';
import CardReady from './components/CardReady';
import Mainpage from './components/Mainpage';
import ShowCode from './components/ShowCode';
import './style.css';

const App = () => (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Mainpage /> } />
        <Route path="/vytvor-si-prani" element={ <CardCreate /> } >
          <Route path=":kod" element={ <CardReady /> } />
        </Route>
        <Route path="/vyzvedni-si-prani" element={ <CardPickUp /> } />
          
        <Route path="/zobraz-kod" element={ <ShowCode /> } />
        <Route path="/prani-pripraveno" element={ <CardReady /> } />
        <Route path="/card" element={ <Card /> } />
      </Routes>
    </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
