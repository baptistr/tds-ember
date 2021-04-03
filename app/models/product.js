import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') price;
  @attr('string') comments;
  @belongsTo('section') section;
  @hasMany('product', { inverse: null }) packs;
}
