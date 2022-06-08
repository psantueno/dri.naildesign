const userLogged = (req, res, next) => {
    res.locals.isLogged = false;

    if(req.session.userLogin) {
        res.locals.isLogged = true;
        res.locals.userLogin = req.session.userLogin; //le asigno al response el usuario logueado que vino por el request.
    }
    
    next();
}

module.exports = userLogged;