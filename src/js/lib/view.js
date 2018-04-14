export default class View {
    constructor(id, model, tmpl) {
        this.model = model;
        this.el = document.getElementById(id);
        this.tmpl = tmpl;
        this.bindEvents();
    }

    bindEvents() {
        this.model.subscribe('update', this.render, this);
    }

    render() {
        this.el.innerHTML = this.tmpl(this.model.get());
    }

    remove() {
        this.el = undefined;
        this.model.unsuscribe(this.render);
    }
}
