import jwt from 'jsonwebtoken';
import config from 'config';

const privateKey = Buffer.from(
    config.get<string>("privateKey"),
    "base64"
  ).toString("ascii");
  const publicKey = Buffer.from(
    config.get<string>("publicKey"),
    "base64"
  ).toString("ascii");
  
const jwtSecret = config.get<string>("jwtSecret");

export function signJWT(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, jwtSecret, {
        ...(options && options),
        algorithm: 'HS256'
    });
}

export function verifyJWT(token: string) {
    try {
        const decoded = jwt.verify(token, jwtSecret);
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (e: any) {
        console.error(e);
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null
        }
    }

}