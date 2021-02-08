import Route from '@ember/routing/route';
import { promos } from 'tds/data/datas';
import Check from 'tds/classes/Services';
import {action} from '@ember/object';

export default class PromoRoute extends Route {
  model() {
    return new Check(promos);
  }

  @action code() {
    return null;
  }
}
