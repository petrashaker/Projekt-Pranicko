import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <>
    {/*
      Tady bude tvůj Vánoční přáníčko :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
      - použij router (musíš si ho nainstalovat)
    */}
    <p>Všechno (asi) funguje.</p>
  </>
);

render(<App />, document.querySelector('#app'));
