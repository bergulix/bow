"use strict";

const { validateAll } = use("Validator");
const BowArrow = use("App/Models/BowArrow");

class BowArrowController {
  allowed_fields = [
    "brand",
    "model",
    "spin",
    "grain",
    "length",
    "weight",
    "head_weight",
    "comment"
  ];

  rules = {
    brand: "required",
    model: "required",
    spin: "required|number",
    grain: "required|number",
    length: "required|number",
    weight: "required|number",
    head_weight: "required|number"
  };

  async list() {
    return await BowArrow.all();
  }

  async create({ request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    return await BowArrow.create(data);
  }

  async update({ params, request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    const item = await BowArrow.findOrFail(params.id);
    item.merge(data);
    await item.save();
    return item;
  }

  async delete({ params }) {
    const item = await BowArrow.findOrFail(params.id);
    await item.delete();
    return item;
  }
}

module.exports = BowArrowController;
