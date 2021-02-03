import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  MAX = 100;

  @tracked content = 'Entrez votre texte';
  @tracked info = '';

  get style() {
    if (this.size < 15) return 'danger';
    else if (this.size < 35) return 'warning';
    else return 'info';
  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  clear() {
    this.content = '';
  }

  @action
  save() {}

  @action
  update() {}
}
