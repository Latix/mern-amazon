import jwt from "jsonwebtoken";

export const generateWebToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET || "872w3DbGofjfDDoNHMyMEnjjNc3rs3XCXQ6vAzW5SBWuXtAC0VQtYe5yYZO9bhT6", {
        expiresIn: '30d',
    });
}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer xxxx
        jwt.verify(token, process.env.JWT_SECRET || "872w3DbGofjfDDoNHMyMEnjjNc3rs3XCXQ6vAzW5SBWuXtAC0VQtYe5yYZO9bhT6", (err, decode) => {
            if (err) {
                res.status(401).send({ message: "Invalid token" });
            } else {
                req.user = decode;
                next();
            }
        })
    } else {
        res.status(401).send({ 
            status: 401,
            statusText: "error",
            message: "No token" 
        });
    }
}