function errorHandler(err, req, res, next) {
    const status = err?.status ?? err.statusCode ?? 500
    res.send({
        statusCode: status,
        message: err?.message ?? "internalServer Error"
    })
}

function notFoundError(req, res, next) {
    res.send({
        statusCode: 404,
        message: "not Found Page"
    })
}

module.exports = {errorHandler,notFoundError}