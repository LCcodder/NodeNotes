import * as jwt from 'jsonwebtoken'
import { User } from '../../actors/User'

export const extractJwtPayload = (token: string): Pick<User, "login"> => {
    return jwt.decode(token) as Pick<User, "login">
}