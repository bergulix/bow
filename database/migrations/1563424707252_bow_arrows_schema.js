"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BowArrowsSchema extends Schema {
  up() {
    this.create("bow_arrows", table => {
      table.increments();
      table.string("brand", 45).notNullable();
      table.string("model", 45).notNullable();
      table.decimal("spin").notNullable();
      table.decimal("grain").notNullable();
      table.decimal("length").notNullable();
      table.decimal("weight").notNullable();
      table.decimal("head_weight").notNullable();
      table.text("comment");
      table.timestamps();
    });
  }

  down() {
    this.drop("bow_arrows");
  }
}

module.exports = BowArrowsSchema;
