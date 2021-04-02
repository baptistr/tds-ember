import Abstractroute from './abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionsRoute extends Abstractroute {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('sections'),
      products: this.store.findAll('product'),
    });
  }

  @action addSection() {
    this.transitionTo('sections.add');
  }

  @action deleteSection() {
    this.transitionTo('sections.delete');
  }

  @action board() {
    this.transitionTo('board');
  }

  @action addProduct() {
    this.transitionTo('sections.addProduct');
  }
}
