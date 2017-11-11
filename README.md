# SukimaJS
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

A schema creator and validator.

## Install
Use NPM to install with the command:

```
npm i -S sukimajs
```

## How to use
Import SukimaJS inside your JS file using:

```javascript
var sukimajs = require('sukimajs');
```

Create your Schema:

```javascript
var User = sukimajs.register({
  name : 'alphanumeric',
  pass : 'base64',
  email: 'email'
});
```

Validate data using the validate method:

```javascript
var data = {
  name: 'sukima',
  pass: 'cGFzc3dvcmQqMTIz',
  email: 'sukima@gmail.com'
}
var valid = User.validate(data);
```

If the data are valid the valid variable will be true, else the variable valid will be an array of errors.

If you want to use it in browser just compile it using Browserify to create a browser compatible JS file.

Enjoy!

### Possible validations
* email
* url
* domain
* ip
* alpha
* number
* alphanumeric
* base64
* hexadecimal
* hexcolor
* int
* float
* null
* uuid
* date
* creditcard
* isbn
* mobilephone
* json
* ascii
* mongoid

If you set a type different to these you always will get false.

## Tests
To do test just use the command:

```
npm test
```

## License
The MIT License (MIT)

Copyright (c) 2015 Sergio Daniel Xalambrí

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
