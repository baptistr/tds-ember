import { action } from '@ember/object';
import Abstractroute from './abstractroute';

export default class SectionsRoute extends Abstractroute {
  model() {
    return this.store.findAll('sections');
  }

  @action board() {
    this.transitionTo('board');
  }
}
