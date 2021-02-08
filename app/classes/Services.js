export default class Services {
  services = [];
  check = [];
  constructor(services) {
    this.services = services;
  }

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
    let services = this.services.filterBy('active', true);
    let result = 0;
    services.forEach((s) => {
      result += s.price;
    });
    return result;
  }

  get code() {
    return 'k';
  }
}
