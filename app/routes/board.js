import Abstractroute from './abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class BoardRoute extends Abstractroute {
  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetail',
        }),
        employee: user,
      });
    }
  }

  @action logout() {
    this.transitionTo('logout');
  }

  @action section() {
    this.transitionTo('sections');
  }
}
