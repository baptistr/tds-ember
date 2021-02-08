export default class Services {
  services = [];
  constructor(services) {
    this.services = services;
  }

  //@computed('services.@each.active')
  get countActive() {
    var count = this.services.filterBy('active', true).length;
    if(count > 1)
      return count + " services sélectionnés";
    else if(count == 1)
      return count + " service sélectionné";
    else
      return "Aucun service sélectionné";
  }

  get sumActive() {
    // Programmation fonctionnelle
    let services = this.services.filterBy('active', true);
    let result = 0;
    services.forEach((s) => {
      result += s.price;
    });
    return result;
  }
}
