const express = require("express");
const Assistant = require("../models/assistant.model.js");
const {
  createAssistant,
  getAssistant,
  updateAssistant,
  deleteAssistant,
} = require("../controllers/assistant.controller.js");
const router = express.Router();

router.post("/", createAssistant);
router.get("/:id", getAssistant);
router.patch("/:id", updateAssistant);
router.delete("/:id", deleteAssistant);

module.exports = router;
