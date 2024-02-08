import sumNumbers from "./moduleOne.mjs";
import {
    one as oneRenamed,
    two,
    mult
} from "./moduleOne.mjs"

const res1 = sumNumbers(10, 10)
console.log(res1)

console.log(mult(15, 15))

console.log(oneRenamed)
console.log(two)