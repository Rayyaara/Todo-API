const { body, params } = require("express-validator");

const createCategoryRules = [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3, max: 100 })
      .withMessage("Name must be between 3 and 100 characters"),

    body("description")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Description must not exceed 500 characters"),
];

const updateCategoryRules = [
    params("id").isMongoId.withMessage("Invalid category ID format"),

    body("name")
      .optional()
      .trim()
      .isLength({ min: 3, max: 100 })
      .withMessage("Name must be between 3 and 100 characters"),

    body("description")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Description must not exceed 500 characters"),
];

const getCategoryByIdRules = [
    params("id").isMongoId.withMessage("Invalid category ID format"),
];

module.exports = {
    createCategoryRules,
    updateCategoryRules,
    getCategoryByIdRules,
};