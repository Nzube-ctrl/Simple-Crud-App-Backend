const joi = require("joi");

const productValidator = joi.object({
  name: joi.string().required(),
  quantity: joi.number().required(),
  price: joi.number().required(),
  image: joi.string(),
});

const productValidatorMiddleWare = async (req, res, next) => {
  const productPayload = req.body;
  try {
    await productValidator.validateAsync(productPayload);
    next();
  } catch (error) {
    return res.status(406).send(error.details[0].message);
  }
};

const updateProduct = joi.object({
  name: joi.string(),
  quantity: joi.number(),
  price: joi.number(),
  image: joi.string(),
});

const updatedProductMiddleWare = async (req, res, next) => {
  const productPayload = req.body;
  try {
    await updateProduct.validateAsync(productPayload);
    next();
  } catch (error) {
    return res.status(406).send(error.details[0].message);
  }
};

module.exports = {
  productValidatorMiddleWare,
  updatedProductMiddleWare,
};
