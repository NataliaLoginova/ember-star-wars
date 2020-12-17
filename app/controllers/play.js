import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class PlayController extends Controller {
  queryParams = [
    {
      idLeft: {
        type: 'number'
      },
      idRight: {
        type: 'number'
      },
      resource: {
        type: 'string'
      }
    }
  ];
  resource = 'people'
  idLeft = null;
  idRight = null;
  options = ['people', 'starships'];
  counterLeftCard = 0;
  counterRightCard = 0;
  @action
  applyGame() {
    set(this, 'idLeft', Math.floor(Math.random() * 10) + 1);
    set(this, 'idRight', Math.floor(Math.random() * 10) + 1);
  }
  @action
  setResource(value) {
    set(this, 'resource', value);
  }
}
