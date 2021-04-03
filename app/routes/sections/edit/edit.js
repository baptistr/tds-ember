import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionsEditEditRoute extends Route {
  idProduct;
  renderTemplate() {
    this.render({ outlet: this.idProduct });
  }

  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action editProduct(idProduct) {
    idProduct.save().then(() => this.transitionTo('sections'));
  }

  afterModel(model) {
    this.idProduct = model.get('id');
  }
}
