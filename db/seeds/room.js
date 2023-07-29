/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("room").del();
  await knex("room").insert([
    {
      id: 1,
      name: "Telegram",
      floor: 3,
      for_stuff: false,
    },
    {
      id: 2,
      name: "Microsoft",
      floor: 3,
      for_stuff: false,
    },
    {
      id: 3,
      name: "AliExpress",
      floor: 3,
      for_stuff: false,
    },
    {
      id: 4,
      name: "Google",
      floor: 2,
      for_stuff: false,
    },
    {
      id: 5,
      name: "Apple",
      floor: 2,
      for_stuff: false,
    },
    {
      id: 6,
      name: "GitHub",
      floor: 3,
      for_stuff: false,
    },
    {
      id: 7,
      name: "YouTube",
      floor: 2,
      for_stuff: false,
    },
    {
      id: 8,
      name: "Adobe",
      floor: 2,
      for_stuff: false,
    },
    {
      id: 9,
      name: "Osmondagi Bolalar",
      floor: 3,
      for_stuff: false,
    },
    {
      id: 10,
      name: "Twitter",
      floor: 3,
      for_stuff: false,
    },
  ]);
};
