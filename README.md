# Logic Gate JS

A simple package for simulating logic gates.

## Features

- Support basic logic gates
- Lightweight and easy to user
- Support TypeScript

## Installation

```bash
# npm
npm install @almsomnia/logic-gate

# pnpm
pnpm add @almsomnia/logic-gate

# yarn
yarn add @almsomnia/logic-gate

# bun
bun add @almsomnia/logic-gate
```

## Usage

Import and use the package in your project:

```javascript
import { and, or, not, xor } from '@almsomnia/logic-gate'

console.log(and(true, false));      // false
console.log(or(true, false));       // true
console.log(not(true));             // false
console.log(xor(true, false));      // true
```

## API Reference

| Function | Description                                         |
| :--------| :---------------------------------------------------|
| `and`    | Returns the logical AND of two boolean values.      |
| `or`     | Returns the logical OR of two boolean values.       |
| `not`    | Returns the logical NOT of the input boolean value. |
| `xor`    | Returns the logical XOR of two boolean values.      |
| `nand`   | Returns the logical NAND of two boolean values.     |
| `nor`    | Returns the logical NOR of two boolean values.      |
| `xnor`   | Returns the logical XNOR of two boolean values.     |

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.