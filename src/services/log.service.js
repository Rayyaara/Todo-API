const ActivityLog = require("../models/activityLog.model.js");

const logActivity = async(userId, action, description, ipAddress) => {
    try {
        const log = new ActivityLog({
            user: userId,
            action,
            description,
            ipAddress
        });
        await log.save();
    } catch (error) {
        console.error("Gagal mencatat log aktivitas:", error.message)
    }
};

module.exports = {
    logActivity
};