import jwt from 'jsonwebtoken';


function authMiddleware(req, res, next) {
 
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;      
        next();
    } catch (error) {
        console.error('Erro na autenticação:', error);
        return res.status(401).json({ error: 'Token inválido' });
    }
}

export default authMiddleware;