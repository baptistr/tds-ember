import { action } from '@ember/object';
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class SectionsEditRoute extends Route {
  idSection;
  renderTemplate() {
    this.render({ outlet: this.idSection });
  }

  model(params) {
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
      sectionId: params.section_id,
    });
  }

  @action editSection(section) {
    section.save().then(() => this.transitionTo('sections'));
  }

  @action deleteSection(section) {
    section.save().then(() => this.transitionTo('sections'));
  }

  /*@action addProduct() {
    this.transitionTo('sections.edit.addProduct');
  }*/

  @action resetEdit(idSection) {
    this.transitionTo('sections.edit').then(() => {
      this.transitionTo('sections.edit.edit', idSection);
    });
  }

  @action resetDelete(idSection) {
    this.transitionTo('sections.edit').then(() => {
      this.transitionTo('sections.edit.delete', idSection);
    });
  }

  afterModel(model) {
    this.idSection = model.section.get('id');
  }
}
