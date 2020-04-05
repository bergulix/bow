"use strict";

/*
|--------------------------------------------------------------------------
| BowArmSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class BowArmSeeder {
  async run() {
    await Factory.model("App/Models/BowArm").createMany(10);
  }
}

module.exports = BowArmSeeder;
