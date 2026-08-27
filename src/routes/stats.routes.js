const express = require("express");
const router = express.Router();
const statsController = require("../controllers/stats.controller.js");
const checkApiKey = require("../middlewares/apiKey.middleware.js");

/**
 * @swagger
 * /api/stats/summary:
 *   get:
 *     summary: Mengambil ringkasan statistik todo (total, selesai, belum selesai)
 *     description: >
 *       Endpoint ini ditujukan untuk integrasi machine-to-machine (misalnya dashboard eksternal), 
 *       sehingga tidak memakai login JWT seperti endpoint /api/todos, melainkan proteksi API Key lewat
 *       header x-api-key.
 *     tags: [Stats]
 *     security:
 *       - apiKeyAuth: []
 *     responses:
 *       200: 
 *         description: Ringkasan statistik berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 message: { type: string, example: Summary retrieved successfully }
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalTodos: { type: integer, example: 25 }
 *                     completedTodos: { type: integer, example: 10 }
 *                     pendingTodos: { type: integer, example: 15 }
 *       401:
 *         description: API Key tidak dikirim atau tidak valid
 */

router.get("/summary", checkApiKey, statsController.getSummary);

/**
 * @swagger
 * /api/stats/categories:
 *   get: 
 *     summary: Mengambil ringkasan statistik kategori
 *     tags: [Stats]
 *     security:
 *       - apiKeyAuth: []
 *     responses:
 *       200:
 *         description: Ringkasan statistik berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 message: { type: string, example: "Category summary retrieved successfully" }
 *                 data:
 *                   type: object
 *                   properties: 
 *                     totalCategories: { type: integer, example: 5 }
 *       401:
 *         description: API Key tidak dikirim atau tidak valid
 */

router.get("/categories", checkApiKey, statsController.getCategorySummary);

module.exports = router;