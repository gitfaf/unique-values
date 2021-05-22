# unique-values

Get the unique values from array, objects etc.

## Changes

### V4

- sort removed from returned array. Sort yourself `.sort((a, b) => a - b)`

### V3

- Uses set instead of loop
- returns only numbers
- works on numbers

### V2

- typescript
- dev dependencies

### V1

- still works.
- no need to update your code base if you are using it.

## Usage

```bash

    npm i unique-values

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
