function signup(login, mail, pass) {
  var checks = [
    { sub: 'login', is: /\W/,
      err: 'should only have latin letters, numbers and underscores' },
    { sub: 'login', not: /^.{3,16}$/,
      err: 'should be 3 to 16 characters long' },
    { sub: 'mail', not: emailRegExp,
      err: "that doesn't look like a valid e-mail" },
    { sub: 'pass', not: /./,
      err: 'empty password is not allowed' }
  ]
  var invalid = validate({login, mail, pass}, checks)
  if (invalid) tellWhat(invalid)
  else signupReq(login, mail, pass)
}

function signupReq(login, mail, pass) {
  request('POST',
          `server.php?task=signup&login=${login}&mail=${mail}&pass=${pass}`,
          signupRespHandl, console.log)
}

function signupRespHandl(response) {
  try {
    response = JSON.parse(response)
    if (response.invalid) tellWhat(response.invalid)
    else console.log(response)
  }
  catch {
    response = response.trim()
    if (response.startsWith('<') && response.endsWith('>'))
      document.body.innerHTML = response
    else alert('Unexpected server response: '+response)
  }
}

function tellWhat(invalid) {
  if (typeof invalid == 'string') console.log(invalid)
  else console.log('Error on input '+invalid[0]+': '+invalid[1])
}