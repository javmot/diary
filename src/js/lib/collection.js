import Observable from './observable.js';

export default class Collection extends Observable {
    constructor(ModelClass) {
        super();
        this.ModelClass = ModelClass;
        this.models = [];
    }

    add(data) {
        const model = new this.ModelClass(data);
        this.models.push(model);
        this.publish('add', model);
    }

    fetch() {
        return Promise.all(this.map(model => model.fetch()))
            .then(() => this.publish('update'));
    }

    get() {
        return this.map(model => model.get());
    }

    map(cb) {
        return this.models.map(model => cb(model));
    }
}
