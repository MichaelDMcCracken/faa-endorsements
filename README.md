# FAA Endorsements

This project is a JavaScript API that implements FAA Endorsements as found in
AC 61-65G.

## API

The library is an object which has several properties.

### `Endorsements`

These are the endorsement objects which make up the content of the library.
These should match the content of the endorsements as found in AC 61-65G. The
content is convered to an EJS template for rendering. The variables required
for rendering the template are referred to as locals. A locals object is also
on the Endorsement.

### `List`

List maps the titles of the available Endorsements to an Array.
