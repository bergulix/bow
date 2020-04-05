"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class BowArm extends Model {
  static get table() {
    return "bow_arms";
  }

  measurements() {
    return this.hasMany("App/Models/Measurement");
  }
}

module.exports = BowArm;
