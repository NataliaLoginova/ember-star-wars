import Route from '@ember/routing/route';
import { set, get } from '@ember/object';

export default class PlayRoute extends Route {
  queryParams = {
    idLeft: {
      refreshModel: true
    },
    idRight: {
      refreshModel: true
    },
    resource: {
      refreshModel: true
    },
  };
  async model(queryParams) {
    const model = { leftCard: {}, rightCard: {} };
    if (queryParams.idLeft && queryParams.idRight) {
      try {
        model.leftCard = await this.store.findRecord(queryParams.resource, queryParams.idLeft);
        model.rightCard = await this.store.findRecord(queryParams.resource, queryParams.idRight);
      } catch (e) {
        console.log(e)
      }
    }
     return model;
  }

  setupController(controller, model) {
    if (model.leftCard.metric && model.rightCard.metric && model.leftCard.metric !== model.rightCard.metric) {
      if (model.leftCard.metric > model.rightCard.metric) {
        set(controller, 'counterLeftCard', get(controller, 'counterLeftCard') + 1)
      } else {
        set(controller, 'counterRightCard', get(controller, 'counterRightCard') + 1)
      }
    }
  }
}
