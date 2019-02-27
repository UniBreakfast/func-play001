var { validate } = require('./validate')

var email = {
  sub: 2,
  not:
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  err: "that doesn't look like a valid e-mail!"
}
var checks = [
  {
    is: /\W/,
    err: "latin letters, numbers and _ only!"
  },
  {
    not: /^.{3,8}$/,
    err: "should be 3 to 8 characters long!"
  }
]
console.log(validate('aa5jdjf', checks))
var checks2 = [
  {
    not: /.+/,
    err: "should not be empty"
  },
  {
    sub: 1,
    is: /\W/,
    err: "latin letters, numbers and _ only!"
  },
  {
    sub: 1,
    not: /^.{3,8}$/,
    err: "should be 3 to 8 characters long!"
  },
  email
]
console.log(validate(['aa5 jdjf', 'from@mail.com'], checks2))
var checks3 = [
  {
    not: /.+/,
    err: "should not be empty"
  },
  {
    sub: 1,
    is: /\W/,
    err: "latin letters, numbers and _ only!"
  },
  {
    sub: 1,
    not: /^.{3,8}$/,
    err: "should be 3 to 8 characters long!"
  },
  email
]
console.log(validate(['aa5jdjf', ''], checks3))