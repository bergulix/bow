"use strict";

const { validateAll } = use("Validator");
const BowArm = use("App/Models/BowArm");

class BowArmController {
  allowed_fields = ["brand", "model", "font_per_energy", "length", "comment"];

  rules = {
    brand: "required",
    model: "required",
    font_per_energy: "required|number",
    length: "required|number"
  };

  async list() {
    return await BowArm.all();
  }

  async create({ request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    return await BowArm.create(data);
  }

  async update({ params, request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    const item = await BowArm.findOrFail(params.id);
    item.merge(data);
    await item.save();
    return item;
  }

  async delete({ params }) {
    const item = await BowArm.findOrFail(params.id);
    await item.delete();
    return item;
  }
}

module.exports = BowArmController;
