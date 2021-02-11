import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; //a chaque fois que elements sera modifié, @tracked va permettre de recuperer sa valeur dans un tableau
  selected = [];
  id = 'id';

  constructor() {
    //permet d'utiliser le composant plusieurs fois facilement en appelant le constructeur
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target; //on recupere la valeur html de l'event
    var selectedIds = [...select.selectedOptions].map((option) => option.value); //c'est une liste qui recupere la valeur des ids des options
    if (this.args.onChange) {
      //si une valeur à changé ...
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e === elm[this.id]).length > 0
        )
      ); //recuperer les selectids choisis par l'utilisateur
    }
  }
}
