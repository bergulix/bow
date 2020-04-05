"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Person", (faker, i, data) => {
  return {
    name: data.name === undefined ? faker.name() : data.name,
    strain_length:
      data.strain_length === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.strain_length,
    hand: data.hand === undefined ? faker.bool() : data.hand,
    city: data.city === undefined ? faker.city() : data.city,
    comment:
      data.comment === undefined ? faker.sentence({ words: 8 }) : data.comment
  };
});

Factory.blueprint("App/Models/BowArrow", (faker, i, data) => {
  return {
    brand: data.brand === undefined ? faker.word() : data.brand,
    model: data.model === undefined ? faker.word() : data.model,
    spin:
      data.spin === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.spin,
    grain:
      data.grain === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.grain,
    length:
      data.length === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.length,
    weight:
      data.weight === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.weight,
    head_weight:
      data.head_weight === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.head_weight,
    comment:
      data.comment === undefined ? faker.sentence({ words: 8 }) : data.comment
  };
});

Factory.blueprint("App/Models/BowCenter", (faker, i, data) => {
  return {
    brand: data.brand === undefined ? faker.word() : data.brand,
    model: data.model === undefined ? faker.word() : data.model,
    weight:
      data.weight === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.weight,
    angle_up:
      data.angle_up === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.angle_up,
    angle_down:
      data.angle_down === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.angle_down,
    ilf_berger_distance_up:
      data.ilf_berger_distance_up === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.ilf_berger_distance_up,
    ilf_berger_distance_down:
      data.ilf_berger_distance_down === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.ilf_berger_distance_down
  };
});

Factory.blueprint("App/Models/BowArm", (faker, i, data) => {
  return {
    brand: data.brand === undefined ? faker.word() : data.brand,
    model: data.model === undefined ? faker.word() : data.model,
    font_per_energy:
      data.font_per_energy === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.font_per_energy,
    length:
      data.length === undefined
        ? faker.floating({ min: 0, max: 100 })
        : data.length,
    comment:
      data.comment === undefined ? faker.sentence({ words: 8 }) : data.comment
  };
});

Factory.blueprint("App/Models/Measurement", (faker, i, data) => {
  return {
    person_id: faker.integer({ min: 1, max: 10 }),
    bow_arm_id: faker.integer({ min: 1, max: 10 }),
    bow_center_id: faker.integer({ min: 1, max: 10 }),
    bow_arrow_id: faker.integer({ min: 1, max: 10 })
  };
});

Factory.blueprint("App/Models/MeasurementData", (faker, i, data) => {
  return {
    measurement_id: data.measurement_id,
    imu_serial: data.imu_serial,
    time_raw: data.time_raw,
    acc_x: data.acc_x,
    acc_y: data.acc_y,
    acc_z: data.acc_z
  };
});
