const ActivityLog = require("../models/activityLog.model.js");

const logActivity = async(userId, action, description, targetId,ipAddress) => {
    try {
        const log = new ActivityLog({
            user: userId,
            action,
            description,
            targetId,
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