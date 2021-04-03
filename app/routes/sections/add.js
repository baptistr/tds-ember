import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class SectionsAddRoute extends Route {
  model() {
    //obligatoire
    return {};
  }

  @action addSection(section) {
    let addSection = this.store.createRecord('section', section);
    addSection.save().then(() => this.transitionTo('sections'));
  }

  renderTemplate() {
    this.render({ outlet: 'addProduct/SectionOutlet' });
  }
}
