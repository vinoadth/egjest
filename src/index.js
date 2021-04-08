import { add, format } from 'mathjs'

const sum = (a, b) => {
  let output = add(a, b)
  return Number(format(output, { precision: 14 }))
}

console.log(sum(0.1, 0.2))

export default sum
