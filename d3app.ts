import * as d3 from 'd3-array'
import { max } from 'd3-array'

const arr = [1, 3, 2, 44, 3, 5, 4, 7, 6, 6, 9, 8]

console.log(d3.max(arr))
console.log(max(arr))

const xxx = [
  { name: 'aaa', age: 56, date: Date(), role: 'qqqqq' },
  { name: 'bbb', age: 6, date: Date(), role: 'qqqqq' },
  { name: 'ccc', age: 27, date: Date(), role: 'qqqqq' },
  { name: 'ddd', age: 16, date: Date(), role: 'wwwww' },
  { name: 'eee', age: 34, date: Date(), role: 'wwwww' },
  { name: 'fff', age: 67, date: Date(), role: 'yyyyy' },
  { name: 'ggg', age: 55, date: Date(), role: 'yyyyy' },
  { name: 'hhh', age: 2, date: Date(), role: 'yyyyy' },
  { name: 'iii', age: 40, date: Date(), role: 'xxxyy' },
]

//const grouped = d3.group(xxx, f => f.role)
//console.log('=', Array.from(grouped, ([key, values]) => ({ key, values })))

const rolledup = d3.rollup(
  xxx,
  v => ({ count: v.length, sumAge: d3.sum(v, d => d.age) }),
  f => f.role.substr(3)
)

console.log('=', Array.from(rolledup, ([key, values]) => ({ role: key, ...values })))
console.log('=', rolledup)
