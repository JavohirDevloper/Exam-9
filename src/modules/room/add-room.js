import db from "../../db/index.js";

export const addRoom = async (payload) => {
  const result = await db("room").insert(payload).returning("*");
  return result;
};
