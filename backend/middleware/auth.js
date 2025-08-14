import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader);

    if (!authHeader) {
      return res.status(401).json({ success: false, message: 'Not authorized, please login again' });
    }

    // ✅ Extract only the token part if "Bearer" is present
    const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    req.body.userId = decoded.id; // Make sure token contains userId
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default authUser;
