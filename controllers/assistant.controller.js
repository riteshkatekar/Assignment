const Assistant = require("../models/assistant.model");

const createAssistant = async (req, res) => {
  try {
    const assistant = await Assistant.create(req.body);
    res.status(201).json({
      messsage : "Assistant is created",
      assistant_id : assistant._id,
    }); // Respond with ID of the created assistant
  } catch (error) {
    res.status(500).json({ message: "Failed to create assistant", error: error.message });
  }
};

const getAssistant = async (req, res) => {
  try {
    const { id } = req.params;
    const assistant = await Assistant.findById(id);

    if (!assistant) {
      return res.status(404).json({ message: "Assistant not found" });
    }

    res.status(200).json(assistant);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve assistant", error: error.message });
  }
};

const updateAssistant = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAssistant = await Assistant.findByIdAndUpdate(id, req.body);

    if (!updatedAssistant) {
      return res.status(404).json({ message: "Assistant not found" });
    }

    res.status(200).json(updatedAssistant);
  } catch (error) {
    res.status(500).json({ message: "Failed to update assistant", error: error.message });
  }
};

const deleteAssistant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAssistant = await Assistant.findByIdAndDelete(id);

    if (!deletedAssistant) {
      return res.status(404).json({ message: "Assistant not found" });
    }

    res.status(200).json({ message: "Assistant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete assistant", error: error.message });
  }
};

module.exports = {
  getAssistant,
  createAssistant,
  updateAssistant,
  deleteAssistant
};
