import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { config } from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(400).send({ error: 'Token não encontrado !' });
  }
  const [token] = authHeader.split(' ');
  try {
    const decoded = await promisify(jwt.verify)(token, config.secret);
    req.userId = decoded.token;
    req.userType = decoded.type;
    return next();
  } catch (error) {
    return res.status(400).send({ error: 'Token invalido !' });
  }
};
