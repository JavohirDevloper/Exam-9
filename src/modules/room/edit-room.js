import db from "../../db/index.js";

export const editRoom = async (id, changes) => {
  const room = await db("room").where({ id }).first();

  if (!room) {
    throw new Error("Room not found");
  }

  return (await db("room").where({ id }).update(changes).returning("*"))[0];
};
