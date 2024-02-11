import mongoose from "mongoose";
import workoutModel from "../models/workout";

export const getWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

export const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await workoutModel.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// create a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add to the database
  try {
    const workout = await workoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ error: error.message });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await workoutModel.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await workoutModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};
