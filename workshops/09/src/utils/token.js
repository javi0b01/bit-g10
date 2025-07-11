import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

export function getToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, { expiresIn: '1h' }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
}
