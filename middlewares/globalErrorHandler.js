
const globalErrorHandler = async (error, req, res, next) => {
    res.status(500).json({message: error.message || "Something went wrong please try again later" })
};

module.exports = {globalErrorHandler};