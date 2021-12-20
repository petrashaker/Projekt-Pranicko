
   
import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import CardCreate from './components/CardCreate';
import CardPickUp from './components/CardPickUp';
import CardReady from './components/CardReady';
import Mainpage from './components/Mainpage';
import './style.css';

const App = () => {
  const [idRecieved, setIdRecieved] = useState([])
  const handleIdRecieved = (idRecieved) => {
    setIdRecieved(idRecieved)
  }
  console.log("handleIdRecieved: " + idRecieved)
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Mainpage /> } />
        <Route path="/vytvor-si-prani" element={ <CardCreate handleIdRecieved={handleIdRecieved}/> } />
        <Route path="/vyzvedni-si-prani" element={ <CardPickUp /> } />
          
        <Route path="/prani-pripraveno" element={ <CardReady idRecieved={idRecieved}/> } />
        <Route path="/card/:id" element={ <Card idRecieved={idRecieved}/> } />
      </Routes>
    </BrowserRouter>
)};

render(<App />, document.querySelector('#app'));