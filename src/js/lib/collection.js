import Observable from './observable';

export default class Collection extends Observable {
    constructor(Model) {
        super();
        this.Model = Model;
        this.models = [];
    }

    add(data) {
        const model = new this.Model(data);
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
