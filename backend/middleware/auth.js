import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    // Use the same fallback secret as token creation to avoid mismatch
    const secret = process.env.JWT_SECRET || "secret";
    const token_decode = jwt.verify(token, secret);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export default authMiddleware;
