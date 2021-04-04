import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsEditAddProductRoute extends Route {
  model(params) {
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id),
    });
  }

  @action addProduct(product) {
    let addProduct = this.store.createRecord('product', product);
    addProduct.save().then(() => this.transitionTo('sections'));
  }
}
