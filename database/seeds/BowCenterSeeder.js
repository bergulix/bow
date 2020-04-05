"use strict";

/*
|--------------------------------------------------------------------------
| BowCenterSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class BowCenterSeeder {
  async run() {
    await Factory.model("App/Models/BowCenter").createMany(10);
  }
}

module.exports = BowCenterSeeder;
