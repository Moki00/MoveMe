const Move = require("../models/move-model");

createMove = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a move",
        });
    }

    const move = new Move(body);

    if (!move) {
        return res.status(400).json({ success: false, error: err });
    }

    move.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: move._id,
                message: "Move created!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: "Move not created!",
            });
        });
};

//maybe remove for MVP
updateMove = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a body to update",
        });
    }

    Move.findOne({ _id: req.params.id }, (err, move) => {
        if (err) {
            return res.status(404).json({
                err,
                message: "Move not found!",
            });
        }
        move.name = body.name;
        move.time = body.time;
        move.rating = body.rating;
        move.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: move._id,
                    message: "Move updated!",
                });
            })
            .catch((error) => {
                return res.status(404).json({
                    error,
                    message: "Move not updated!",
                });
            });
    });
};

deleteMove = async (req, res) => {
    await Move.findOneAndDelete({ _id: req.params.id }, (err, move) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!move) {
            return res
                .status(404)
                .json({ success: false, error: `Move not found` });
        }

        return res.status(200).json({ success: true, data: move });
    }).catch((err) => console.log(err));
};

getMoveById = async (req, res) => {
    await Move.findOne({ _id: req.params.id }, (err, move) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!move) {
            return res
                .status(404)
                .json({ success: false, error: `Move not found` });
        }
        return res.status(200).json({ success: true, data: move });
    }).catch((err) => console.log(err));
};

getMoves = async (req, res) => {
    await Move.find({}, (err, moves) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!moves.length) {
            return res
                .status(404)
                .json({ success: false, error: `Move not found` });
        }
        return res.status(200).json({ success: true, data: moves });
    }).catch((err) => console.log(err));
};

module.exports = {
    createMove,
    updateMove,
    deleteMove,
    getMoves,
    getMoveById,
};
