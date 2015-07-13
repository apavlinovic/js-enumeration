# JS Enumerations - handling client side enumeration's with ease
Implementation of a classic enumeration structure. Enables access to enumeration value via bracket notation [ value ] but also enables the user to store complex data as enumeration value. 
Plays well with angular dropdowns and ng-options notation, especially when converted to an array with the provided toArray() method.

## Basic Usage
JS Enumerations requires you to define your enumeration values as an object with a special label property that will be used for key generation.
Although you can add as many properties to the value side of your enumeration definition, **label is required**.

```Javascript
var cats = new Enumeration({
	1: { label: 'Meow' },
	2: { label: 'Peow' },
	3: { label: 'Foow' },
});
```

The following is true for the cats enumeration:

```Javascript
cats.Meow === 1 			// True
cats.Peow === 2 			// True

cats[1].label === "Meow"	// True
cats[2].label === "Peow"	// True
```

This is the exact structure that is created in order for the cats enumeration:

```Javascript
{
    1: { label: 'Meow' },
    2: { label: 'Peow' },
    3: { label: 'Foow' },

	Meow: 1,
	Peow: 2,
	Foow: 3
}
```


## Methods
Method  | Example & Explanation
------------- | -------------
setValue(id, value) | cats.setValue(13, { label: 'Lucky' }) 
                    | Tries to add the **value as id** to your Enumeration. Throws an error if you try to overwrite an existing id. Id must be a number, and value must be an Object with label property: { label: "MyAvesomeLabel" }
toArray() | var arrayOfCats = cats.toArray(); 
          | Converts the enumeration to an array of objects with a flat list of value properties.