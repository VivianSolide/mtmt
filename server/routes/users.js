const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const upload = multer({
    dest: "./public/uploads/"
});
const User = require("../models/user");
const Quizz = require("../models/quizz");
const Match = require("../models/match");

//////////////////////////////////////////////

router.post("/api/postquizz/", function(req, res, next) {
    Quizz.findById(req.body._id, function(err, quizz) {
        if (err) {
            next(err);
        } else {
            var score = 0;
            if (req.body.musicAnswer === "A") {
                score = 25;
            }
            if (req.body.movieAnswer === "B") {
                score += 25;
            }
            if (req.body.qualityAnswer === "C") {
                score += 25;
            }
            if (req.body.defectAnswer === "A") {
                score += 25;
            }
            if (score > quizz.treshold) {
                Match.create({
                    _quizzId: req.body._id,
                    _userRequester: req.body._userRequester,
                    _userCandidate: req.body._userCandidate,
                    average: score / 100
                });
                res.json({
                    message: "BRAVO"
                });
            } else {
                res.json({
                    message: "NOPE"
                });
            }
        }
    });
});

//////////////////////////////////////////////

router.get("/api/getcandidates/:id", function(req, res, next) {
    Match.find({
        _userRequester: req.params.id
    })
        .populate({
            path: "_userCandidate",
            select: "firstName photos age phone"
        })
        .exec(function(err, candidates) {
            if (err) {
                next(err);
            } else {
                res.json(candidates);
            }
        });
});

//////////////////////////////////////////////

router.get("/api/getprofile/:id", function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
});

router.get("/api/getmatches/:id", function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            next(err);
        } else {
            User.find({
                gender: user.lookingForGender,
                age: {
                    $gte: user.lookingForRange.min,
                    $lte: user.lookingForRange.max
                }
            })
                .limit(100)
                .exec((err, users) => {
                    if (err) {
                        next(err);
                    } else {
                        res.json(users);
                    }
                });
        }
    });
});

//////////////////////////////////////////////

router.get("/api/getquizz/:id", function(req, res, next) {
    console.log(req.params.id);
    Quizz.find({
        userId: req.params.id
    }).exec((err, userQuizz) => {
        if (err) {
            next(err);
        } else {
            res.json(userQuizz);
        }
    });
});

//////////////////////////////////////////////

router.post("/profile", upload.single("photo"), function(req, res, next) {
    User.findByIdAndUpdate(
        req.user._id,
        {
            photos: "/uploads/" + req.file.filename
        },
        (err, user) => {
            if (err) {
                next(err);
            } else {
                res.redirect(`http://localhost:8080/lookingfor`);
            }
        }
    );
});

//////////////////////////////////////////////

router.post("/api/lookingfor", function(req, res, next) {
    const { id, gender, lookingForRange, lookingForGender } = req.body;

    User.findByIdAndUpdate(
        id,
        {
            phone: req.body.phone,
            gender: req.body.gender,
            lookingForRange: {
                min: req.body.lookingForRange.min,
                max: req.body.lookingForRange.max
            },
            lookingForGender: req.body.lookingForGender,
            age: req.body.age,
            bio: req.body.bio
        },
        err => {
            if (err) return next(err);
            res.json({
                success: true
            });
        }
    );
});

// Quizz Routes

router.post("/api/quizzmusic", function(req, res, next) {
    Quizz.findByIdAndUpdate(
        req.body.userId,
        {
            music: {
                answer: req.body.artist,
                hint: req.body.hint
            }
        },
        {
            upsert: true
        },
        (err, quizz) => {
            if (err) {
                next(err);
            } else {
                res.json({
                    message: "bravo patrick"
                });
            }
        }
    );
});

router.post("/api/quizzmovie", function(req, res, next) {
    Quizz.findByIdAndUpdate(
        req.body.userId,
        {
            movie: {
                answer: req.body.movie,
                hint: req.body.hint
            }
        },
        {
            upsert: true
        },
        (err, quizz) => {
            if (err) {
                next(err);
            } else {
                res.json({
                    message: "bravo patrick"
                });
            }
        }
    );
});

router.post("/api/sendtraits", function(req, res, next) {
    Quizz.findByIdAndUpdate(
        req.body.userId,
        {
            $set: {
                traits: {
                    quality: {
                        answer: req.body.traits.quality.answer,
                        hint: req.body.traits.quality.hint
                    },
                    defect: {
                        answer: req.body.traits.defect.answer,
                        hint: req.body.traits.defect.hint
                    }
                }
            }
        },
        {
            upsert: true
        },
        (err, quizz) => {
            if (err) {
                next(err);
            } else {
                res.json({
                    message: "bravo patrick!"
                });
            }
        }
    );
});

router.post("/api/sendtreshold", function(req, res, next) {
    Quizz.create(
        {
            userId: req.body.userId,
            treshold: req.body.treshold
        },
        (err, quizz) => {
            if (err) {
                next(err);
            } else {
                User.findByIdAndUpdate(
                    quizz.userId,
                    {
                        quizzId: quizz._id
                    },
                    (err, user) => {
                        if (err) {
                            next(err);
                        } else {
                            res.json(user);
                        }
                    }
                );
            }
        }
    );
});

module.exports = router;
