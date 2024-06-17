const { constants } = require('../constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? req.statusCode : 500;
    res.status(statusCode)
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                error: err.message,
                status: "Not Found",
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                error: err.message,
                status: "Bad Request",
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                error: err.message,
                status: "Unauthorized",
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                error: err.message,
                status: "Forbidden",
            });
            break;
        case constants.INTERNAL_SERVER_ERROR:
        default:
            res.json({
                error: err.message,
                status: "Internal Server Error",
            });
            break;
    }
}
module.exports=errorHandler