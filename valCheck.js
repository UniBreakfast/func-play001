var { validate } = require('./validate')

var email = {
  not:
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  err: "that doesn't look like a valid E-mail!"
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
console.log(validate('aa5jdggfjf', checks))