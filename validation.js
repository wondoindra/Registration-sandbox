const passwordValidate = (str) => {
  const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?=.*[ -\/:-@\[-\`{-~]).{8,}$/gm)
  return regex.test(str)
}

module.exports = { passwordValidate }