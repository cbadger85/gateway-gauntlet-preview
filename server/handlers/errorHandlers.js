exports.asyncErrors = fn => function (req, res, next) {
  return fn(req, res, next).catch(next);
};

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

exports.validationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  // validation errors look like
  const errorKeys = Object.keys(err.errors);
  const error = errorKeys.map(key => err.errors[key].message);
  res.status(503).json({ error });
};

exports.developmentErrors = (err, req, res, next) => {
  const errorDetails = {
    error: err.message,
    status: err.status,
  };
  res.status(err.status || 500).json(errorDetails);
};
