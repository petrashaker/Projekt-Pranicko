# Projekt Superkvíz

Naprogramuj aplikaci, ve které si budou uživatelé vytvořit svoje vánoční přáníčko a někomu ho poslat.

![ukázka Vánočního přáníčka](pranicko-ukazka.jpg)



## API

### Získat údaje konkrétního přáníčka

Každé přáníčko má jedinečné ID - šestimístný kód, který slouží pro vyzvednutí přáníčka.
Kód připoj vždy nakonec adresy. Kód `ABC123` ti vrátí vzorové přáníčko.

```
https://xmas-api.itgirls.cz/cards/ABC123
```
[Ukázka dat](https://xmas-api.itgirls.cz/cards/ABC123)

---

### Uložit vytvořené přání do databáze

Na server musíš udělat request typu POST a jako data v tělě requestu poslat JSON data.

**POST request pošli na adresu:**
```
https://xmas-api.itgirls.cz/cards
```

**Na server pošli data v tomto formátu:**
```json
{
  "background": "green",
  "color": "red",
  "cover": "gifts",
  "music": "jinglebells",
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
