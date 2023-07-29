import Joi from "joi";

export const createRoomSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    floor: Joi.number().required(),
    for_stuff: Joi.boolean().required(),
  }),
};
export const updateRoomSchema = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    floor: Joi.number(),
    for_stuff: Joi.boolean(),
  }),
};
export const removeRoomSchema = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};
