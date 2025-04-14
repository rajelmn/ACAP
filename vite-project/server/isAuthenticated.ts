

function isAuthenticated(req, res , next) {
    if(!req.session.loggedIn) {
        console.log("Not authenticated"); 
        return res.status(401).json({errorMessage: "you dont have the permission"})
    }
    console.log('authenticated')
    return next()
}

module.exports = {isAuthenticated}