"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BowCentersSchema extends Schema {
  up() {
    this.create("bow_centers", table => {
      table.increments();
      table.string("brand", 45).notNullable();
      table.string("model", 45).notNullable();
      table.decimal("weight").notNullable();
      table.decimal("angle_up").notNullable();
      table.decimal("angle_down").notNullable();
      table.decimal("ilf_berger_distance_up").notNullable();
      table.decimal("ilf_berger_distance_down").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("bow_centers");
  }
}

module.exports = BowCentersSchema;
