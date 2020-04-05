"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class BowArrow extends Model {
  static get table() {
    return "bow_arrows";
  }

  measurements() {
    return this.hasMany("App/Models/Measurement");
  }
}

module.exports = BowArrow;
