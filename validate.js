function validate(subj, checks) {
  if (Array.isArray(checks)) {
    for (let i=0, err; i<checks.length; i++) {
      if (err=validate(subj,checks[i])) return err
    }
  }
  else if (Array.isArray(subj)) {
    if (checks.sub) {
      let err = validate(subj[checks.sub-1],checks)
      if (err) return [checks.sub, err]
    }
    else {
      for (let i=0, err; i<subj.length; i++) {
        if (err=validate(subj[i],checks))
          return [i+1, err]
      }
    }
  }
  else {
    const {is, not, err} = checks
    if (is && is.test(subj) || not && !not.test(subj))
      return err
  }
}

module.exports = { validate }