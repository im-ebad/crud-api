const express = require("express");
const router = express.Router();
const {
  findAll,
  createUser,
  findOne,
  destroy,
} = require("../Handlers/handler.js");

router.get("/", findAll);
router.get("/:id", findOne);
router.delete("/:id", destroy);
router.post("/", createUser);
module.exports = router;
