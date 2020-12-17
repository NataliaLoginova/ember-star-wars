import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalize(modelClass, resourceHash, id) {
    const data = {
      id: id,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    return { data: data };
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (requestType === 'findRecord') {
      return this.normalize(primaryModelClass, payload, id);
    } else if (requestType === 'findAll')  {
      return payload.results.reduce((documentHash, item) => {
        let parsedUrl = item.url.split('/');
        let { data, included } = this.normalize(primaryModelClass, item, parsedUrl[parsedUrl.length - 2]);
        documentHash.included.push(...included);
        documentHash.data.push(data);
        return documentHash;
      }, { data: [], included: [] })
    }
  }
}
