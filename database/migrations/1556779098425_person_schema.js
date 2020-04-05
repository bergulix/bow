"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PersonSchema extends Schema {
  up() {
    this.create("persons", table => {
      table.increments();
      table.string("name", 45).notNullable();
      table.decimal("strain_length").notNullable();
      table
        .boolean("hand")
        .notNullable()
        .defaultTo(false);
      table.string("city", 45).notNullable();
      table.text("comment");
      table.timestamps();
    });
  }

  down() {
    this.drop("persons");
  }
}

module.exports = PersonSchema;
