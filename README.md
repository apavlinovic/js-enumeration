# JS Enumerations - handling client side enumeration's with ease
Implementation of a classic enumeration structure. Enables access to enumeration value via bracket notation [ value ] but also enables the user to store complex data as enumeration value. 
Plays well with angular dropdowns and ng-options notation. Examples for usage below.

## Usage
JS Enumerations requires 

```Javascript
var cats = new Enumeration({
	1: { label: 'Meow' },
	2: { label: 'Peow' },
	3: { label: 'Foow' },
});

cats.Meow === 1
cats.Peow === 2
```
