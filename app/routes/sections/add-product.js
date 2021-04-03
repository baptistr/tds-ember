import { action } from '@ember/object';
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class SectionsAddProductRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
    });
  }

  @action addProduct(product) {
    let addProduct = this.store.createRecord('product', product);
    addProduct.save().then(() => this.transitionTo('product'));
  }

  renderTemplate() {
    this.render({ outlet: 'addProduct/SectionOutlet' });
  }
}
