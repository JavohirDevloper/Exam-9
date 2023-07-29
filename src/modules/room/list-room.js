import db from "../../db/index.js";

export const listRoom = async ({ filter = {} } = {}) => {
  const result = await db("room").where(filter).select("*");
  return result;
};
