"use strict";

/*
|--------------------------------------------------------------------------
| BowArmSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class MeasurementSeeder {
  async run() {
    await Factory.model("App/Models/Measurement").createMany(25);

    for (let i = 0; i <= 10; i++) {
      await Factory.model("App/Models/MeasurementData").create({
        measurement_id: 1,
        imu_serial: "123abc",
        time_raw: i,
        acc_x: 50,
        acc_y: 100,
        acc_z: 500
      });
    }

    for (let i = 0; i <= 10; i++) {
      await Factory.model("App/Models/MeasurementData").create({
        measurement_id: 1,
        imu_serial: "dcg321",
        time_raw: i,
        acc_x: 150,
        acc_y: 300,
        acc_z: 800
      });
    }
  }
}

module.exports = MeasurementSeeder;
