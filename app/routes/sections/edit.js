import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class SectionsEditRoute extends Route {
  idSection;
  renderTemplate() {
    this.render({ outlet: this.idSection });
  }
  model(params) {
    console.log(params.section_id);
    this.idSection = params.section_id;
    return this.store.findRecord('sections', params.section_id);
  }

  @action editSection(section) {
    section.save().then(() => this.transitionTo('sections'));
  }
}
