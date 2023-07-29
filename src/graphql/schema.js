import { makeExecutableSchema } from "@graphql-tools/schema";
import roomsModule from "../modules/room/index.js";

const typdefsArr = [roomsModule.typeDefs];
const resolversArr = [roomsModule.resolvers];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
