# JS Enumerations - handling client side enumeration's with ease
Implementation of a classic enumeration structure. Enables access to enumeration value via bracket notation [ id ] but also enables the user to store complex data as enumeration value.
Plays well with angular dropdowns and ng-options notation, especially when converted to an array with the provided `toArray()` method.

## Basic Usage
JS Enumerations requires you to define your enumeration values as a `String` or as an `Object` with a special `label` property that will be used for key generation.
When defining enumerations as pairs of Ids and Objects, you can add as many properties as you wish to the `Object` but `label` is required.

*Note: the label property is striped of any white spaces for easier access in the code.*

```Javascript
var cats = new Enumeration({
	1: 'Meow',
	2: { label: 'Peow' },
	3: { label: 'Foow Meow' }
});
```

The following is true for the cats enumeration:

```Javascript
cats.Meow === 1                 // True
cats.Peow === 2                 // True
cats.FoowMeow === 3             // True

cats[1] === "Meow"              // True
cats[2].label === "Peow"        // True
cats[3].label === "Foow Meow"   // True
```

This is the exact structure that is created in order for the cats enumeration:

```Javascript
{
    1: 'Meow',
    2: { label: 'Peow' },
    3: { label: 'Foow Meow' },

	Meow: 1,
	Peow: 2,
	FoowMeow: 3
}
```

## Methods
Method | Example  | Explanation
------ | ------   | -----------
`setValue(id, value)` | `cats.setValue(13, { label: 'Lucky' })` | Tries to add the **value as id** to your Enumeration. Throws an error if you try to overwrite an existing id. Id must be a number, and value must be a `String` or an `Object` with label property `{ label: "MyAwesomeLabel" }`
`toArray()` | `var arrayOfCats = cats.toArray()` | Converts the enumeration to an array of objects with a flat list of value properties.

## Browser compatibility
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox (Gecko) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE9+ | 1.5 (1.8) | (Yes) | (Yes) | (Yes)
