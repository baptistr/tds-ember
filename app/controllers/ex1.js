import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {

  MAX = 100;

  @tracked
  toggle() {
    'Entrez votre texte';
  }

  @tracked
  info() {
    '';
  }

  get style(){
    if (this.toggle() < 20) return 'warning';
    if (this.toggle() < 10) return 'danger';
    else return 'info';
  }

  get size(){
    return this.toggle();
  }

  @action
  clear(){
    return '';
  }

  @action
  save(){

  }

  @action
  update(){

  }
}
