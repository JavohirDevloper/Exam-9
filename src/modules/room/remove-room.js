import db from "../../db/index.js";

export const removeRoom = async ({ id }) => {
  const room = await db("room").where({ id }).first();

  if (!room) {
    throw new Error("Room not found");
  }

  return (await db("room").where({ id }).delete().returning("*"))[0];
};
