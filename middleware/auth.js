const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Not authorized");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decodedToken;

    req.user = { id, username };

    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized");
  }
};

module.exports = authMiddleware;
