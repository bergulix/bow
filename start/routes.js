'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Helpers = use('Helpers');

Route.group(() => {
  Route.get('persons', 'PersonController.list');
  Route.post('persons', 'PersonController.create');
  Route.patch('persons/:id', 'PersonController.update');
  Route.delete('persons/:id', 'PersonController.delete');

  Route.get('bow-arrows', 'BowArrowController.list');
  Route.post('bow-arrows', 'BowArrowController.create');
  Route.patch('bow-arrows/:id', 'BowArrowController.update');
  Route.delete('bow-arrows/:id', 'BowArrowController.delete');

  Route.get('bow-centers', 'BowCenterController.list');
  Route.post('bow-centers', 'BowCenterController.create');
  Route.patch('bow-centers/:id', 'BowCenterController.update');
  Route.delete('bow-centers/:id', 'BowCenterController.delete');

  Route.get('bow-arms', 'BowArmController.list');
  Route.post('bow-arms', 'BowArmController.create');
  Route.patch('bow-arms/:id', 'BowArmController.update');
  Route.delete('bow-arms/:id', 'BowArmController.delete');

  Route.get('measurements', 'MeasurementController.list');
  Route.get('measurements/:id', 'MeasurementController.get_data');
  Route.post('measurements/:id', 'MeasurementController.save_additional_data');
}).prefix('api');

Route.any('*', ({ response }) => response.download(Helpers._appRoot + '/public/index.html'));
