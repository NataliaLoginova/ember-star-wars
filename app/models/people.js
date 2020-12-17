import Model, { attr } from '@ember-data/model';

export default class PeopleModel extends Model {
  @attr('string') name;
  @attr('string') height;
  @attr('string') mass;
  get metric() {
    return parseInt(this.mass);
  }
}
