const express = require("express");

const CardCtrl = require("../controllers/card-ctrl");

const router = express.Router();

router.post("/card", CardCtrl.createCard);
router.put("/card/:id", CardCtrl.updateCard);
router.delete("/card/:id", CardCtrl.deleteCard);
router.get("/card/:id", CardCtrl.getCardById);
router.get("/cards", CardCtrl.getCards);

module.exports = router;
