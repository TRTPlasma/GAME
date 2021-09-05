

module.exports.checkUser = async (req, res, next) => {
    const token = req.cookies
    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null
                next()
            } else {
                let user = await userModel.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}

module.exports.requireAuth = async (req, res) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
            if (err) {
                res.send(400).send('NO TOKEN')
            } else {
                console.log(decodedToken.id)
                next()
            }
        })
    } else {
        res.status(400).send('NO TOKEN 2')
    }
}