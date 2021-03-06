const { eq: plain_eq, similar: plain_similar } = require('./equality')

const add = a => b => a + b
const sub = a => b => a - b
const mul = a => b => a * b
const div = a => b => a / b

const not = x => !x
const or = a => b => a || b
const and = a => b => a && b
const bnot = x => ~x
const bor = a => b => a | b
const band = a => b => a & b
const mod = a => b => a % b
const lsh = a => b => a << b
const rsh = a => b => a >> b

const is = a => b => a === b
const eq = a => b => plain_eq(a, b)
const similar = a => b => plain_similar(a, b)
const xor = a => b => a ^ b

const map = f => t => t.map(f)
const filter = p => t => t.filter(p)

const foldl = f => a => t => t.reduce(uncurry2(f), a)
const foldr = f => a => t => t.reduceRight(uncurry2(f), a)

const foldl1 = f => t => t.reduce(uncurry2(f))
const foldr1 = f => t => t.reduceRight(uncurry2(f))

const sum = foldl1(add)
const product = foldl1(mul)

const log = x => (console.log(x), x)

const id = x => x // I-combinator
const call = f => x => f(x) // A-combinator
const compose = f => g => x => f(g(x)) // B-combinator
const constant = x => () => x // K-combinator
const flip = f => x => y => f(y)(x) // C-combinator
const apply = f => g => x => f(x)(g(x)) // S-combinator
const join = f => x => f(x)(x) // W-combinator
const on = f => g => x => join(f)(g(x)) // Psi-combinator

const curry2 = f => a => b => f(a, b)
const curry3 = f => a => b => c => f(a, b, c)
const curry4 = f => a => b => c => d => f(a, b, c, d)
const curry5 = f => a => b => c => d => e => f(a, b, c, d, e)

const uncurry2 = f => (a, b) => f(a)(b)
const uncurry3 = f => (a, b, c) => f(a)(b)(c)
const uncurry4 = f => (a, b, c, d) => f(a)(b)(c)(d)
const uncurry5 = f => (a, b, c, d, e) => f(a)(b)(c)(d)(e)

const create = c => args => new c(...args)

module.exports = {
	add, sub, mul, div,
	not, or, and, bnot, bor, band, mod, lsh, rsh,
	is, eq, similar, xor,
	map, filter, foldl, foldr, foldl1, foldr1,
	sum, product,
	log,
	id, call, compose, constant, flip, apply, join, on,
	curry2, curry3, curry4, curry5,
	uncurry2, uncurry3, uncurry4, uncurry5,
	create
}
