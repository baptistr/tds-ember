import Route from '@ember/routing/route';
import {action, set} from '@ember/object';

export default class PromoRoute extends Route {

  @action valider() {
    set('active', !s.active);
  }

}
