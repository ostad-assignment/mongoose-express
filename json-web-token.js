const jwt = require("jsonwebtoken")

const secretKey = "jkdfhfh3uy2JKHJSKAJ34273jhasdfjsb"

function generateToken(userId, secretKey) {
  const payload = {
    userId: userId
  }

  const options = {
    expiresIn: "1h" // Token expiration time
  }

  const token = jwt.sign(payload, secretKey, options)

  return token
}
