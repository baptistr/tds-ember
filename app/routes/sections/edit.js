import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class SectionsEditRoute extends Route {
  model(parametres) {
    return this.store.findRecord('sections', parametres.section_id);
  }

  @action editSection(section) {
    section.save().then(() => this.transitionTo('sections'));
  }
}
