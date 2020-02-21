require('dotenv').config()

export const config = {
  secret: process.env.SECRET_TOKEN,
  expiresIn: '30d',
};