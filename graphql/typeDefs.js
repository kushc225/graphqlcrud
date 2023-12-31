import { gql } from "apollo-server";

const typeDefs = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    thumpsup: Int
    thumpsdown: Int
  }

  input RecipeInput {
    name: String
    description: String
  }
  input RecipeInput {
    name: String
    description: String
  }

  type Query {
    recipe(id: ID!): Recipe
    getRecipe(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(id: ID!): Boolean
    editRecipe(id: ID!, recipeInput: RecipeInput): Boolean!
  }
`;

export default typeDefs;
