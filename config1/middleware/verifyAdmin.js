const veriryAdmin = (req, res, next) => {
    if (req.user.role == "ADMIN") {
        next()
    } else {
        res.status(401).send("not initiator")
    }
}
module.exports = veriryAdmin