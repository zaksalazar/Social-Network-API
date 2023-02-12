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
  Thought.create(
    {
      thoughtText: req.body.thoughtText,
      username: req.body.username,
    },
    (err, thought) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(true);
      }
    }
  );
});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Thought.findById(id, (err, thought) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(thought);
    }
  });
});

//TODO: ROUTE TO UPDATE A THOUGHT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Thought.findByIdAndUpdate(
    {
      thoughtText: req.body.thoughtText,
      username: req.body.username,
    },
    (err, thought) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(true);
      }
    }
    
  )
});

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Thought.findByIdAndDelete(id, (err, thought) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Thought Deleted');
    }
  });
});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post("/:thoughtId/reactions", (req, res) => {});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete("/:thoughtId/reactions/:reactionId", (req, res) => {});

module.exports = router;
