const Category = require("../models/category.js");

async function createCategory(data) {
    const category = new Category ({
       name: data.name,
       description: data.description,
       owner: data.owner,
    });
    return await category.save();
}

async function getAllCategories(ownerId) {
    return await Category.find({ owner: ownerId }).sort({ createdAt: -1 });
}

async function getCategoryById(id) {
    return await Category.findById(id);
}

async function updateCategory(id, data) {
    return await Category.findByIdAndUpdate(
        id,
        {
            name: data.name,
            description: data.description,
        },
        { new: true, runValidators: true }
    );
}

async function deleteCategory(id) {
    return await Category.findByIdAndDelete(id);
}

async function getCategorySummaryStats() {
    const totalCategories = await Category.countDocuments();
    return { totalCategories };
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getCategorySummaryStats,
};