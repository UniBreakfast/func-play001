function validate(str, checks) {
  if (Array.isArray(checks)) {
    for (let i=0, err; i<checks.length; i++) {
      if (err=validate(str,checks[i])) return err
    }
  } else {
    const {is, not, err} = checks
    if (is && is.test(str) || not && !not.test(str))
      return err
  }
}

module.exports = { validate }