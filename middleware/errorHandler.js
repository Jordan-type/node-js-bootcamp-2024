const handleValidationError = (message, statusCode) => {
  try {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
  } catch (error) {
    return error;
  }
};

const errorHandler = (err, req, res, next) => {
  try {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({ success: false, message });
  } catch (error) {
    next(error);
  }
};

export {
  handleValidationError,
  errorHandler,
};
