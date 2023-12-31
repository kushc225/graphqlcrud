import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  description: String,
  createdAt: String,
  thumpsup: Number,
  thumpsdown: Number,
});

export default mongoose.model("recipe", schema);
