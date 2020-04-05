"use strict";

/*
|--------------------------------------------------------------------------
| BowArrowSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class BowArrowSeeder {
  async run() {
    await Factory.model("App/Models/BowArrow").createMany(10);
  }
}

module.exports = BowArrowSeeder;
