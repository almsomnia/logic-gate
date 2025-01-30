function and(...args: boolean[]): boolean {
   return args.every((arg) => arg)
}

function or(...args: boolean[]): boolean {
   return args.some((arg) => arg)
}

function xor(...args: boolean[]): boolean {
   return args.some((arg) => arg) && !args.every((arg) => arg)
}

function not(arg: boolean): boolean {
   return !arg
}

function nor(...args: boolean[]): boolean {
   return !args.some((arg) => arg)
}

function nand(...args: boolean[]): boolean {
   return !args.every((arg) => arg)
}

function xnor(...args: boolean[]): boolean {
   return !args.some((arg) => arg) && args.every((arg) => arg)
}

export { and, or, xor, not, nor, nand, xnor }