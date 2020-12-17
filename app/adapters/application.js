import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://swapi.py4e.com/api/';
  get headers() {
    return {
      accept: '*/*',
    };
  }
}
