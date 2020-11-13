const express = require("express");
const router = express.Router();
const controller = require("../controller/livrosController");

router.get("/", controller.getAll);
router.get("/livros", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postlivros);
router.delete("/", controller.deleteLivros);
router.put("/:id",controller.putLivros);
router.patch("/:id",controller.patchLivros);

module.exports = router;