var { validate } = require('./validate')

/* var email = {
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
console.log(validate('aa5j djf', checks))
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
var checks4 = [
  {
    not: /.+/,
    err: "should not be empty"
  },
  {
    sub: "login",
    is: /\W/,
    err: "latin letters, numbers and _ only!"
  },
  {
    sub: "login",
    not: /^.{3,8}$/,
    err: "should be 3 to 8 characters long!"
  },
  {
    sub: "mail",
    not:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    err: "that doesn't look like a valid e-mail!"
  }
]
console.log(validate({login:'j f', mail:'asdf@asdf'}, checks4))
 */
check = {
  not: /abc/,
  err: 'error description'
}
checks = [{
  sub: 1,
  is: /abc/,
  err: 'error description'
},
{
  sub: 2,
  is: /123/,
  err: 'error2 description'
}]

console.log(validate(['123', 'abc'], checks))

checks = [{
  sub: 'login',
  is: /abc/,
  err: 'error description'
},
{
  sub: 'pass',
  is: /123/,
  err: 'error2 description'
}]

fields = {login: 'abc', pass: 'zxc'}
console.log(validate(fields, checks))
/*
invalid = validate(['123', 'abc'], checks)
if (invalid) output(invalid[0]+': '+invalid[1]) */