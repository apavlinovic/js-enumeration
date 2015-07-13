# JS Enumerations - handling client side enumeration's with ease
Implementation of a classic enumeration structure. Enables access to enumeration value via bracket notation [ value ] but also enables the user to store complex data as enumeration value. 
Plays well with angular dropdowns and ng-options notation. Examples for usage below.

## Basic Usage
JS Enumerations requires 

```Javascript
var cats = new Enumeration({
	1: { label: 'Meow' },
	2: { label: 'Peow' },
	3: { label: 'Foow' },
});

cats.Meow === 1 // True
cats.Peow === 2 // True

// The above code generates the following 
{
    1: { label: 'Meow' },
    2: { label: 'Peow' },
    3: { label: 'Foow' },

	Meow: 1,
	Peow: 2,
	Foow: 3
}
```
