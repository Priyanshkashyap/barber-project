const jwt = require("jsonwebtoken");
const secret = "hahahihihohohehe";
function usermiddleware(req,res,next)
{
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}
module.exports=usermiddleware;