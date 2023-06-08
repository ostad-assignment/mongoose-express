const jwt = require("jsonwebtoken")
const secretKey = "jkdfhfh3uy2JKHJSKAJ34273jhasdfjsb"

function authenticate(req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  try {
    const decoded = jwt.verify(token, secretKey)
    req.userId = decoded.userId
    next()
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" })
  }
}
