# FAA Endorsements

## Usage

```javascript
const f = new FAAEndorsements()

// get a list of available endorsements
console.log(f.Endorsements)
// => ['Pre-solo knowledge test',...etc]

console.log(f.locals)
// => {}

f.addEndorsement('Pre-solo knowledge test')

console.log(f.locals)
// => {
//   date: undefined,
//   student: {
//     name: undefined,
//     cert_number: undefined,
//     gender: undefined
//   },
//   instructor: {
//     name: undefined,
//     cert_number: undefined,
//     cert_expiration_date: undefined
//   },
//   aircraft: {
//     make: undefined,
//     model: undefined
//   },
// }
```
