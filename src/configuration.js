// Tento soubor slouží jako konfigurace pro formulář
// pro tvorbu přáníčka.
// Obsahuje všechny možnosti pro prvky formuláře,
// kde je na výběr z více možností (např. barvy).
// Tato data můžeš použít jako podklad pro mapování,
// abys mohla formulářové prvky vytvořit "automaticky".
// - value je vždy hodnota, která se posílá na server
//   a kterou použiješ pro tvorbu názvu třídy v hotovém přáníčku
// - description je český popis, který se zobrazí ve formuláři

export const configuration = {

	// pozadí stránky
	backgrounds: [
		{
			value: 'red',
			description: 'červená',
		},
		{
			value: 'green',
			description: 'zelená',
		},
		{
			value: 'blue',
			description: 'modrá',
		},
		{
			value: 'gold',
			description: 'zlatá',
		},
		{
			value: 'tree',
			description: 'vánoční stromeček',
		},
		{
			value: 'decorations',
			description: 'vánoční ozdoby',
		},
		{
			value: 'snow',
			description: 'zasněžená krajina',
		},
	],

	// barva přáníčka
	colors: [
		{
			value: 'red',
			description: 'červená',
		},
		{
			value: 'green',
			description: 'zelená',
		},
		{
			value: 'blue',
			description: 'modrá',
		},
		{
			value: 'gold',
			description: 'zlatá',
		},
	],

	// obrázek na obálce
	covers: [
		{
			value: 'gifts',
			description: 'dárečky',
		},
		{
			value: 'decorations',
			description: 'vánoční ozdoby',
		},
		{
			value: 'snowflakes',
			description: 'vločky',
		},
		{
			value: 'trees',
			description: 'stromečky',
		},
	],

	// intenzita sněžení
	snow: [
		{
			value: 0,
			description: 'bez sněhu',
		},
		{
			value: 100,
			description: 'jemné sněžení',
		},
		{
			value: 500,
			description: 'sněhová vánice',
		},
	],

	// hudba
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

export default configuration;