const adminAuth = (req, res, next) => {
    if(req.session.userLogin.rol !== "Administrador") {
        return res.redirect("/");
    }
    next();
}

module.exports = adminAuth;