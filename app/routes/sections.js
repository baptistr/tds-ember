import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class SectionsRoute extends Abstractroute {
  model() {
    return this.store.findAll('section', { include: 'products' });
  }

  @action addSection() {
    this.transitionTo('sections.add');
  }

  @action editSection() {
    this.transitionTo('sections.edit');
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

  @action resetEdit(idSection) {
    this.transitionTo('sections').then(() => {
      this.transitionTo('sections.edit', idSection);
    });
  }

  @action resetDelete(idSection) {
    this.transitionTo('sections').then(() => {
      this.transitionTo('sections.delete', idSection);
    });
  }
}
