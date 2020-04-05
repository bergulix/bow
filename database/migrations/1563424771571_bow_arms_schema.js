"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BowArmsSchema extends Schema {
  up() {
    this.create("bow_arms", table => {
      table.increments();
      table.string("brand", 45).notNullable();
      table.string("model", 45).notNullable();
      table.decimal("font_per_energy").notNullable();
      table.decimal("length").notNullable();
      table.text("comment");
      table.timestamps();
    });
  }

  down() {
    this.drop("bow_arms");
  }
}

module.exports = BowArmsSchema;
