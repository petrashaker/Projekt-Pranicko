# Projekt Přáníčko

Naprogramuj aplikaci, ve které si budou uživatelé vytvořit svoje vánoční přáníčko a někomu ho poslat.

* [Jak má aplikace fungovat](#jak-má-aplikace-fungovat)
* [Úvodní instrukce](#úvodní-instrukce)
* [HTML vzor](#html-vzor)
* [Konfigurační soubor](#konfiguracni-soubor)
* [Serverové API](#serverové-api)
  - [GET - Získat údaje konkrétního přáníčka](#get---získat-údaje-konkrétního-přáníčka)
  - [POST - Uložit vytvořené přání do databáze](#post---uložit-vytvořené-přání-do-databáze)
* [Jak posílat data na server](#jak-posílat-data-na-server)
* [Jak přehrávat hudbu](#jak-přehrávat-hudbu)
* [Jak do projektu přidat sníh](#jak-do-projektu-přidat-sníh)
* [Tipy na závěr](#tipy-na-zaver)



![ukázka Vánočního přáníčka](screenshots/05-prani-zavrene.jpg)

---

## Jak má aplikace fungovat

Celou aplikace tvoří 5 stránek:

1. Úvodní stránka - [screenshot](screenshots/01-uvod.jpg)
2. Formulář pro vytvoření přáníčka - [screenshot](screenshots/02-vytvorit.jpg)
3. Zobrazení kódu po vytvoření přáníčka- [screenshot](screenshots/04-hotovo.jpg)
4. Vyzvednutí přáníčka pomocí kódu - [screenshot](screenshots/03-vyzvednout.jpg)
5. Přáníčko - [zavřené](screenshots/05-prani-zavrene.jpg) / [otevřené](screenshots/06-prani-otevrene.jpg) (po kliknutí na přání)


Každý může na stránku přijít a vytvořit si vlastní přáníčko - vybere si barvu pozadí, barvu přáníčka, obrázek na obálce, intenzitu sněžení na pozadí, hudbu (hraje po oteření přáníčka), a samozřejmě text věnování a svůj podpis.

Data z formuláře se odešlou na server (viz sekce o API) na server, který je uloží do databáze a zpět nám pošle unikátní šestimístný kód přáníčka.

Tento kód jde buď zadat do stránky pro vyzvednutí přáníčka a nebo ho použít jako součást odkazu, který vede přímo na přáníčko - např. `https://tvuj-web.cz/card/abc123`

Když návštěvník zadá na stránce kód nebo klikne na odkaz, který na přáníčko vede přímo, zobrazí se mu zavřené přáníčko. Po kliknutí na přáníčko začne hrát hudba a přáníčko se otevře.

---

## Úvodní instrukce

* udělej si fork tohoto repozitáře
* naklonuj si ho k sobě na disk
* spusť `npm install` pro doinstalování závislostí
* doinstaluj si další potřebné knihovny - minimálně `react-router-dom` a případně `react-snowfall`, pokud chceš, aby ti na stránce sněžilo :)

---

## HTML vzor

Ve složce `html-vzor` máš připravený kompletní HTML a CSS kód pro všechny stránky aplikace.

* Rozsekej HTML na části a udělej z nich vhodné komponenty.
* Zkopíruj CSS do projektu a připoj do hlavní `App`.
* Pro zjednodušení bych ti tentokrát doporučil, abys nechala CSS v jednom kuse a nesnažila se ho rozdělit k jednotlivým komponentám. CSS je dlouhé a složité a ne vždy je jasné, ke které komponentě bys ho měla přidat. Nech si to jako bonus na závěr, když na to budeš mít na konci ještě chuť.
* Do projektu si budeš muset přesunout obrázky a audio. Jak obrázky tak hudbu můžeš importovat do komponent a pak s nimi prcovat jako s proměnnými. Nebo si můžeš uvnitř `src` vytvořit složku `assets` a soubory dát tam a potom k nim přistupovat přes přímou adresu relativí ke kořeni celého projektu.
* **POZOR:** ať s obrázky uděláš cokoliv, budeš muset v CSS přepsat cesty k obrázkům. Jsou tam na hodně místech - musíš je upravit všude podle toho, kam si obrázky do projektu přesuneš.

---

## Konfigurační soubor

Ve složce `src` je soubor `configuration.js`. Bude se ti hodit při programování formuláře na tvorbu přáníčka. Obsahuje pole se všemi možnostmi pro jednotlivé prvky ve formuláři - výběr barev, pozadí, hudby, apod. Tato data můžeš použít pro automatické generování prvků formuláři pomocí mapování.

Například sekce *music* v konfiguračním souboru vypadá takto:
```js
// hudba
{
  ...,

  music: [
    {
      value: 'jingle-bells',
      description: 'Rolničky, rolničky',
    },
    {
      value: 'silent-night',
      description: 'Tichá noc',
    },
    {
      value: 'god-rest',
      description: 'Pokoj Vám',
    },
  ],

}
```

Pomocí těchto dat vytvoříš do formuláře 3 přepínače, u kterých bude napsáno `Roličky, rolničky`, `Tichá noc` a `Pokoj Vám`. Podle vybrané položky se pak na server odešle hodnota `jingle-bells`, `silent-night` nebo `god-rest`.

Hodnotu z `value` použiješ také pro vytvoření jedinečných ID pro formulářové prvky (viz. HTML vzor). Všimni si, kde všude je napsáno `jingle-bells`:
```html
<div class="field__radio">
  <input type="radio" name="music" id="music-jingle-bells" checked>
  <label for="music-jingle-bells">Rolničky, roličky</label>
</div>
```

---

## Serverové API

Aplikace má vytvořené jednoduché API, které má dva endpointy - jeden budeš potřebovat při načtení dat a zobrazní přáníčka, druhý při vytváření přáníčka pro jeho uložení na server.

### GET - Získat údaje konkrétního přáníčka

Každé přáníčko má jedinečné ID - šestimístný kód, který slouží pro vyzvednutí přáníčka.
Kód připoj vždy nakonec adresy. Kód `ABC123` ti vrátí vzorové přáníčko, které už v databázi existuje.

```
https://xmas-api.itgirls.cz/cards/ABC123
```
[Ukázka dat](https://xmas-api.itgirls.cz/cards/ABC123)

---

### POST - Uložit vytvořené přání do databáze

Na server musíš udělat request typu POST a jako data v těle requestu poslat JSON data. Jak to udělat se dočteš o kousek níž.

**POST request pošli na adresu:**
```
https://xmas-api.itgirls.cz/cards
```

**Na server pošli data v tomto formátu (všechna pole jsou povinná):**
```json
{
  "background": "green",
  "color": "red",
  "cover": "gifts",
  "music": "jingle-bells",
  "snow": 1,
  "text": "Text vánočního přání",
  "sender": "Alena"
}
```

**Server ti jako odpověď vrátí ID přáníčka:**
```json
{
  "success": true,
  "data": {
    "id": "ABC123"
  }
}
```

**V případě chyby:**

Pokud by se při uložení něco nepovedlo nebo bys na server poslala nekompletní data (všechna pole jsou povinná), server ti místo kódu přáníčka pošle chyby.

Zda se dotaz povedl, poznáš podle hodnoty vlastnosti `success`, která je buď `true` nebo `false`.

```json
{
  "success": false,
  "errors": [
    "musíš zadat barvu přáníčka",
    "text může mít maximálně 100 znaků"
  ]
}
```

---

## Jak posílat data na server

V kurzu jsme si neukazovali, jak se data na server posílají, ale je to jednoduché. Použiješ k tomu stejný příkaz `fetch` jako pro čtení dat, jen ho musíš správně nastavit.

Data se na server posílají jako JSON. Ty si v programu poskládáš normální javascriptový objekt a do těla dotazu ho převedeš na JSON pomocí funkce `JSON.stringify()`.

Fetch pro odeslání dat na server bude vzpadat t5eba takto:

```js
fetch('https://xmas-api.itgirls.cz/cards', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify( mujObjektKteryChciPoslat )
})
.then(response => response.json())
.then(data => {
  // v proměnné data má odpověď ze serveru
  // a mohu si s ní dělat, co potřebuji
  console.log(data);
})
```

---

## Jak přehrávat hudbu

Pokud hudbu u přáníčka nechceš, klidně tento krok vynech. Když ale hudbu vynecháš, někde na světě umře koťátko, tak si to dobře rozmysli!

Nebudeme zabíhat do zbytečných podrobností (více v React 2!). V projektu je pro tebe připravený custom hook, který se o přehrávání hudby postará. Ty ho musíš jen použít.

Hook najdeš v souboru `src/hooks/useAudio.jsx`. Do komponenty, kde chceš přehrávat hudbu, si ho musíš naimportovat:
```jsx
import { useAudio } from './hooks/useAudio';
```
Cesta v importu se ve tvé aplikaci může lišit.

Naimportovaný hook použiješ podobně, jako používáme třeba `useState`:
```jsx
const [isPlaying, play, pause] = useAudio('cesta-k-hudbe.mp3');
```

Hook vrátí 3 věci:
- `isPlaying` je `true` nebo `false`, podle toho, zda hudba zrovna hraje nebo ne
- `play` je funkce, kterou hudbu spustíš
- `pause` je funkce, kterou hudbu zastavíš

Celé použití pak vypadá třeba takto:
```jsx
import { useAudio } from './hooks/useAudio';

const komponenta = () => {
  const [isPlaying, play, pause] = useAudio('/assets/jingle-bells.mp3');

  handlePlayClick = () => {
    play();
  }

  handlePauseClick = () => {
    pause();
  }

  return (
    <>
      <button onClick={handlePlayClick}> Spustit hudbu </button>
      <button onClick={handlePauseClick}> Zastavit </button>
    </>
  )
}

```

---

## Jak do projektu přidat sníh

V NPM existuje boží knihovna `react-snowfall`, kterou si do projektu můžeš jednoduše přidat sněžení.

Jednoduchou dokumentaci ke knihovně a živou ukázku najdeš v jejích [GitHub repozitáři](https://github.com/cahilfoley/react-snowfall).

Stačí do projektu nainstalovat pomocí:
```
npm install react-snowfall
```

Naimportovat do komponenty:
```jsx
import Snowfall from 'react-snowfall'
```

A pak použít v místě, kam chceš přidat sněžení:
```jsx
<Snowfall />
```

Pokud chceš nastavit množství vloček, můžeš pomocí props:
```jsx
<Snowfall snowflakeCount={200} />
```

---

## Tipy na závěr

* Projekt je nakonec docela složitý, nesnaž se udělat všechno najednou, ale postupuj po částech a vždy si ověř, že daný kus funguje.
* Rozděl si funkčnost do pokud možno malých komponent - například nědělej formulář pro vytváření přáníčka jako jednu masivní komponentu, ve které je všechno, ale rozděl si ho třeba na komponentu pro výběr pozadí, druhou pro výběr barvy, atd.
* I tyto dílčí komponenty se mohou skládat z dalších komponent - např. samostatná komponenta pro jeden vzorek barvy.¨
* Budeš muset vyřešit komunikaci mezi komponentami s právné přdávání props, ale pokud to uděláš správně, zjednoduší ti to celý kód.
* Při převodu HTML vzoru na komponenty si dej pozor na značky, které v HTML nemusí výt uzavřené, ale JSX to vyžaduje. Např. z `<input>` budeš muset udělat `<input />` (lomítko na konci).
* Největší a úplně nejlepší tip jsem si schoval na konec: kurz skončil, ale stále se můžeš ptát na Slacku! :)

Pac a pusu. Přeji hezkou zábavu.