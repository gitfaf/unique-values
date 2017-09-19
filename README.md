# unique-values

Get the unique values from array, objects etc.

## Usage

```bash

    npm i -S unique-values

```

```javascript

    const uniqueValues = require('unique-values')

    uniqueValues.getUniqueArrayValues([1, 2, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2])
    // returns
    // [1, 2, 3, 4, 5, 10, 23]

    uniqueValues.getUniqueObjectValues({'a': 12, 'b': 14, 'c': 14, 'd': 12})
    // returns
    // [12, 14]

```

## License

MIT &copy; Git Faf 2017
