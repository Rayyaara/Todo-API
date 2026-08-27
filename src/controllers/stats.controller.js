const todoService = require("../services/todo.services");
const categoryService = require("../services/category.service.js");
const catchAsync = require("../utils/catchAsync");

const getSummary = catchAsync(async (req, res, next) => {
    const stats = await todoService.getSummaryStats();

    res.status(200).json({
        success: true,
        message: "Summary retrieved successfully",
        data: stats,
    });
});

const getCategorySummary = catchAsync(async (req, res, next) => {
    const stats = await categoryService.getCategorySummaryStats();

    res.status(200).json({
        success: true,
        message: "Category summary retrieved successfully",
        data: stats,
    });
});

module.exports = { 
    getSummary,
    getCategorySummary,
};