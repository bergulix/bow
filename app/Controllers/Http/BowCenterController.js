"use strict";

const { validateAll } = use("Validator");
const BowCenter = use("App/Models/BowCenter");

class BowCenterController {
  allowed_fields = [
    "brand",
    "model",
    "weight",
    "angle_up",
    "angle_down",
    "ilf_berger_distance_up",
    "ilf_berger_distance_down"
  ];

  rules = {
    brand: "required",
    model: "required",
    weight: "required|number",
    angle_up: "required|number",
    angle_down: "required|number",
    ilf_berger_distance_up: "required|number",
    ilf_berger_distance_down: "required|number"
  };

  async list() {
    return await BowCenter.all();
  }

  async create({ request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    return await BowCenter.create(data);
  }

  async update({ params, request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    const item = await BowCenter.findOrFail(params.id);
    item.merge(data);
    await item.save();
    return item;
  }

  async delete({ params }) {
    const item = await BowCenter.findOrFail(params.id);
    await item.delete();
    return item;
  }
}

module.exports = BowCenterController;
