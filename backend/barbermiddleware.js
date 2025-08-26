const jwt= require("jsonwebtoken");
const secret = "hahahihihohohehe";
function barbermiddleware(req,res,next)
{
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, barber) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.barber = barber;
            next();
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}
module.exports=barbermiddleware;