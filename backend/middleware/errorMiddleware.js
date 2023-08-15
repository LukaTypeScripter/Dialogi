const notFound = (req,res,next) => {
    const error = new Error(`NOT FOUND - ${req.originalUrl}`)
    res.status(404)
    next(error)
}



const errorHandler = () => {
    let statusCode = res.statusCode === 200 ? 400 : res.statusCode === 404 ? 500 : res.statusCode;
    let message = err.message;


    if(err.name === "CastError" && err.kind === "ObjectId") {
        statusCode = 404;
        message = "Resourses not found!"
    }
    res.status(statusCode).json({
        message,
        stack:process.env.NODE_ENV === "production" ? null : err.stack
    })
}

export {
    notFound,
    errorHandler
}