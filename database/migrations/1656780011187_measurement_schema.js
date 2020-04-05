'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MeasurementSchema extends Schema {
  up() {
    this.create('measurements', table => {
      table.increments();

      table
        .integer('person_id')
        .unsigned()
        .references('id')
        .inTable('persons');

      table
        .integer('bow_arrow_id')
        .unsigned()
        .references('id')
        .inTable('bow_arrows');

      table
        .integer('bow_center_id')
        .unsigned()
        .references('id')
        .inTable('bow_centers');

      table
        .integer('bow_arm_id')
        .unsigned()
        .references('id')
        .inTable('bow_arms');

      table.decimal('drag_length').nullable();
      table.decimal('arrow_speed').nullable();
      table.decimal('berger_spring_strength').nullable();
      table.string('substance', 45).nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('measurements');
  }
}

module.exports = MeasurementSchema;
