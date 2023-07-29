import db from "../../db/index.js";

export const showRoom = async ({ id }) => {
  const room = await db("room").where({ id }).first();

  if (!room) {
    throw new Error("Room not found");
  }

  return room;
};
