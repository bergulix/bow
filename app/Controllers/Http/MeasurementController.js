"use strict";

const { validateAll } = use("Validator");
const Measurement = use("App/Models/Measurement");
const MeasurementData = use("App/Models/MeasurementData");
const Database = use("Database");

class MeasurementController {
  async list() {
    return await Measurement.query()
      .with("person")
      .with("bow_arrow")
      .with("bow_center")
      .with("bow_arm")
      .orderBy("id", "desc")
      .fetch();
  }

  async get_data({ params }) {
    return MeasurementData.query()
      .where("measurement_id", "=", params.id)
      .fetch();
  }

  async save_additional_data({ params }) {
    const measurement = await Measurement.find(params.id);
    measurement.drag_length = params.drag_length;
    measurement.arrow_speed = params.arrow_speed;
    measurement.berger_spring_strength = params.berger_spring_strength;
    measurement.substance = params.substance;

    measurement.save();

    return measurement;
  }
}

module.exports = MeasurementController;
