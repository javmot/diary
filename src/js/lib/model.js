import Obserbable from './observable.js';

export default class Model extends Obserbable {
    constructor() {
        super();
        this.data = {};
    }

    fetch() {
        return fetch(this.url())
            .then(this.parserResponse)
            .then(this.set.bind(this));
    }

    url() {
        return '/';
    }

    parserResponse(response) {
        return response.json();
    }

    set(data) {
        this.data = Object.assign({}, this.data, data);
        this.publish('update', this.data);
    }

    get(item) {
        return item === undefined ?
            Object.assign({}, this.data) :
            this.data[item];
    }
}
