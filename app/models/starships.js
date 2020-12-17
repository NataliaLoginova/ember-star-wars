import Model, { attr } from '@ember-data/model';

export default class StarshipsModel extends Model {
  @attr('string') name;
  @attr('string') crew;
  get metric() {
    const parsedCrew = this.crew.split(/[-,]/).map(item => parseInt(item));
    return this.crew.includes(',') ? parsedCrew[0] + parsedCrew[1] : parsedCrew[1] || parsedCrew[0];
  }
}
