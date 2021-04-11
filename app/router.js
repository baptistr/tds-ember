import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('board');
  this.route('logout');
  this.route('Abstractroute');
  this.route('order', {path:'order/:order_id'});
  this.route('sections', function() {
    this.route('add');
    this.route('addProduct');
    this.route('delete', {path:'delete/:section_id'});
    this.route('edit', {path:'edit/:section_id'}, function() {
      this.route('edit', {path:'edit/:product_id'});
      this.route('addProduct', {path: 'addProduct/:section_id'});
      this.route('delete', {path:'delete/:product_id'});
    });
  });
  this.route('test');
  this.route('myOrders');
});
