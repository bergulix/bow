"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class BowCenter extends Model {
  static get table() {
    return "bow_centers";
  }

  measurements() {
    return this.hasMany("App/Models/Measurement");
  }
}

module.exports = BowCenter;
