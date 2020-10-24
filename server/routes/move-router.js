const express = require("express");

const MoveCtrl = require("../controllers/move-ctrl");

const router = express.Router();

router.post("/move", MoveCtrl.createMove);
router.put("/move/:id", MoveCtrl.updateMove);
router.delete("/move/:id", MoveCtrl.deleteMove);
router.get("/move/:id", MoveCtrl.getMoveById);
router.get("/moves", MoveCtrl.getMoves);

module.exports = router;
