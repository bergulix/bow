"use strict";

const { validateAll } = use("Validator");
const Person = use("App/Models/Person");

class PersonController {
  allowed_fields = ["name", "strain_length", "hand", "city", "comment"];

  rules = {
    name: "required",
    strain_length: "required|number",
    hand: "required|boolean",
    city: "required|alpha"
  };

  async list() {
    return await Person.all();
  }

  async create({ request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());
    return await Person.create(data);
  }

  async update({ params, request, response }) {
    const data = request.only(this.allowed_fields);

    const validation = await validateAll(data, this.rules);
    if (validation.fails())
      return response.status(400).send(validation.messages());

    const item = await Person.findOrFail(params.id);
    item.merge(data);
    await item.save();
    return item;
  }

  async delete({ params }) {
    const item = await Person.findOrFail(params.id);
    await item.delete();
    return item;
  }
}

module.exports = PersonController;
