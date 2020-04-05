"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Measurement extends Model {
  person() {
    return this.belongsTo("App/Models/Person");
  }

  bow_arrow() {
    return this.belongsTo("App/Models/BowArrow");
  }

  bow_center() {
    return this.belongsTo("App/Models/BowCenter");
  }

  bow_arm() {
    return this.belongsTo("App/Models/BowArm");
  }

  data() {
    return this.hasMany("App/Models/MeasurementData");
  }
}

module.exports = Measurement;
