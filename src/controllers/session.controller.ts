import { Request, Response } from 'express';
import config from 'config';
import { createSession, findSessions, updateSession } from '../services/session.service';
import { validatePassword } from '../services/user.service';
import { signJWT } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
    try{
        const user = await validatePassword(req.body);
        if (!user) return res.status(401).send("Invalid email or password");
        const session = await createSession(user._id.toString(), req.get("user-agent") || "");
        const accessToken = signJWT({ ...user, session: session._id },
            { expiresIn: config.get<string>("accessTokenTtl") }
        )
        const refreshToken = signJWT({ ...user, session: session._id },
            { expiresIn: config.get<string>("refreshTokenTtl") }
        )
        return res.send({ accessToken, refreshToken });
    }
    catch(e:any){
        return res.status(401).send({"error":e.message})
    }
}

export async function getUserSessionsHandler(req:Request,res:Response){
    const userId = res.locals.user._id;
    const sessions = await findSessions({user:userId, valid:true})
    return res.send(sessions);
}

export async function deleteSessionHandler(req:Request,res:Response){
    const sessionId = res.locals.user.session;
    await updateSession({_id:sessionId},{valid:false});
    return res.send({
        accessToken:null,
        refreshToken:null,
    })
}