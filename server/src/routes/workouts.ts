import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});

router.post("/", (req, res) => {
  res.json({ msg: "CREATE single workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE single workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE single workout" });
});

export default router;
