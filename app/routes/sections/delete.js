import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class SectionsDeleteRoute extends Route {
  idSection;
  renderTemplate() {
    this.render({ outlet: this.idSection });
  }
  model(params) {
    this.idSection = params.section_id;
    return this.store.findRecord('section', params.section_id);
  }

  @action deleteSection(section) {
    section.deleteRecord();
    section.save().then(() => this.transitionTo('sections'));
    alert('La section est bien supprimée');
  }
}
