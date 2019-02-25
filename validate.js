function validate(str, checks) {
  if (Array.isArray(checks)) {
    try {
      checks.forEach(check=> {
        var result
        if (result = validate(str, check)) throw result
      })
    } catch (err) {
      return err
    }
  } else {
    const {is, not, err} = checks
    if (is && is.test(str) || not && !not.test(str))
      return err
  }
}

module.exports = { validate }