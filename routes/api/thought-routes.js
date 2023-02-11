const router = require("express").Router();
const { Thought, Reaction } = require("../../models");

//TODO: ROUTE TO GET ALL THOUGHTS
router.get("/", (req, res) => {
  Thought.find({}, (err, thoughts) => {
    res.status(200).json(thoughts);
  });
});

//TODO: ROUTE TO CREATE A NEW THOUGHT
//this is a test// 
router.post("/", (req, res) => {
  Thought.create({
    thoughtText:req.body.thoughtText,
    userName:req.body.userName,
  }, (err, thought) => {
    res.status(200).json(true)
  })
});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get("/:thoughtId", (req, res) => {
  Thought.findById({}, (err, thoughts) => {
    res.status(200).json(thoughts); 
  })
});

//TODO: ROUTE TO UPDATE A THOUGHT
router.put("/", (req, res) => {});

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete("/:thoughtId", (req, res) => {});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post("/:thoughtId/reactions", (req, res) => {});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete("/:thoughtId/reactions/:reactionId", (req, res) => {});

module.exports = router;
