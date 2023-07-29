import { readFileSync } from "fs";
import { join } from "path";
import { removeRoom } from "./remove-room.js";
import { showRoom } from "./show-room.js";
import { editRoom } from "./edit-room.js";
import { addRoom } from "./add-room.js";
import { listRoom } from "./list-room.js";
import httpValidator from "../../shared/http-validator/index.js";
import {
  createRoomSchema,
  removeRoomSchema,
  updateRoomSchema,
} from "./_joi-schem.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "room", "_schema.gql"),
  "utf8"
);
const resolvers = {
  Query: {
    rooms: async (_, args) => {
      const result = await listRoom({ ...args.input });
      return { list: result };
    },
    room: (_, args) => {
      return showRoom({ id: args.id });
    },
  },
  Mutation: {
    createRoom: async (_, { id, input }) => {
      httpValidator({ body: input }, createRoomSchema);
      const result = await addRoom({ id, ...input });
      return result[0];
    },
    updateRoom: (_, args) => {
      httpValidator({ body: args.input }, updateRoomSchema);
      return editRoom(args.id, args.input);
    },
    removeRoom: async (_, { id }) => {
      httpValidator({ params: { id } }, removeRoomSchema);
      const result = await removeRoom({ id });
      return result;
    },
  },
};
export default { typeDefs, resolvers };
