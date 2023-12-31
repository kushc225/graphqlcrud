import RecipeModel from "../model/Recipe.js";

const resolvers = {
  Query: {
    async recipe(_, { id }) {
      return await RecipeModel.findById(id);
    },

    async getRecipe(_, { amount }) {
      return await RecipeModel.find().sort({ createAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createRecipe(_, { recipeInput }) {
      const newRecipe = new RecipeModel({
        ...recipeInput,
        createAt: new Date().toISOString(),
        thumsup: 0,
        thumsdown: 0,
      });
      const res = await newRecipe.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },

    async deleteRecipe(_, { id }) {
      await RecipeModel.findByIdAndDelete(id);
      return true;
    },

    async editRecipe(_, { id, recipeInput }) {
      console.log("called");
      const res = await RecipeModel.findByIdAndUpdate(
        id,
        { $set: recipeInput },
        { new: true }
      );

      console.log({ res });
      return true;
    },
  },
};

export default resolvers;
